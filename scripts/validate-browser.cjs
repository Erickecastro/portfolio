const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8788';
const outputDirectory = process.env.PORTFOLIO_TEST_OUTPUT || '/tmp/portfolio-validation';
fs.mkdirSync(outputDirectory, {recursive: true});
const resumeSource = path.join(__dirname, '..', 'wwwroot', 'Ericke-Castro-Curriculo.pdf');
const site = 'https://ericke-castro.pages.dev';
const routes = ['/', '/projetos/droidko', '/projetos/transsend'];
const widths = [320, 375, 640, 768, 1024, 1440, 1920];
(async () => {
  const browser = await chromium.launch({headless: true});
  const staticContext = await browser.newContext({javaScriptEnabled: false});
  const staticPage = await staticContext.newPage();
  for (const route of routes) {
    const response = await staticPage.goto(base + route);
    assert.equal(response.status(), 200);
    assert.equal(await staticPage.locator('main h1').innerText(), route === '/' ? 'Desenvolvedor de Software' : route.endsWith('droidko') ? 'DroidKo' : 'Transsend');
    assert.ok(await staticPage.locator('main a').count() > 0);
  }
  await staticContext.close();
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  const privateRequests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => {
    if (/github\.com\/[^/]+\/(droidko|transsend)/i.test(request.url())) privateRequests.push(request.url());
  });
  const results = [];
  for (const route of routes) {
    console.log('Validating', route);
    for (const width of widths) {
      await page.setViewportSize({width, height: 900});
      const response = await page.goto(base + route);
      assert.equal(response.status(), 200, route);
      await page.locator('main h1[tabindex="-1"]').waitFor();
      await page.evaluate(() => document.fonts.ready);
      assert.ok(await page.evaluate(() => [...document.fonts].some(font => font.family === 'Montserrat' && font.status === 'loaded')));
      await page.waitForFunction(() => typeof window.portfolioMetadata === 'object');
      await page.waitForFunction(url => document.querySelector('link[rel="canonical"]').href === url, site + route);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('meta[name="description"]').count(), 1);
      const metadata = await page.evaluate(() => {
        const data = JSON.parse(document.querySelector('#structured-data').textContent);
        return {title: document.title, ogTitle: document.querySelector('meta[property="og:title"]').content,
          page: data['@graph'].find(item => item['@type'] === 'WebPage')};
      });
      assert.equal(metadata.title, metadata.ogTitle);
      assert.equal(metadata.page.name, metadata.title);
      assert.equal(metadata.page.url, site + route);
      const overflow = await page.evaluate(() => ({
        viewport: innerWidth,
        document: document.documentElement.scrollWidth,
        elements: [...document.querySelectorAll('body *')].filter(e => {
          const r = e.getBoundingClientRect();
          return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1) && !e.classList.contains('skip-link');
        }).map(e => ({tag: e.tagName, cls: e.className, text: e.textContent.slice(0,70)})).slice(0,15)
      }));
      assert.ok(overflow.document <= width, JSON.stringify({route,width,overflow}));
      const links = await page.locator('a').evaluateAll(as => as.map(a => ({href:a.getAttribute('href'),target:a.target,rel:a.rel})));
      assert.ok(links.every(l => l.href && l.href !== '#'));
      assert.ok(links.filter(l => l.target === '_blank').every(l => l.rel.includes('noopener') && l.rel.includes('noreferrer')));
      assert.ok(links.every(l => !/github\.com\/[^/]+\/(droidko|transsend)/i.test(l.href)));
      if (width === 375 || width === 1440) {
        const axe = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
        results.push({route,width,accessibility:axe.violations.map(v => ({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))});
        assert.deepEqual(axe.violations, [], JSON.stringify(results.at(-1)));
        await page.screenshot({path:`${outputDirectory}/${route === '/' ? 'home' : route.split('/').at(-1)}-${width}.png`,fullPage:true});
      }
      results.push({route,width,overflow:false});
    }
    const html = await (await page.request.get(base + route)).text();
    assert.ok(html.includes('content="'+site+route+'"'), 'Static OG metadata missing: ' + route);
    assert.ok(!html.includes('Desenvolvedor .NET'));
    await page.reload();
    await page.locator('main h1[tabindex="-1"]').waitFor();
    if (route !== '/') {
      assert.equal(await page.locator('main h1').innerText(), route.endsWith('droidko') ? 'DroidKo' : 'Transsend');
      assert.ok((await page.locator('.source-note').innerText()).includes('Código-fonte privado'));
    }
  }
  await page.goto(base + '/');
  await page.locator('main h1[tabindex="-1"]').waitFor();
  assert.equal(await page.locator('h1 .cursor').count(), 0);
  assert.ok(!(await page.locator('h1').innerText()).includes('_'));
  const projectNames = await page.locator('.project-heading h3,.project-heading h4').allTextContents();
  assert.deepEqual(projectNames, ['DroidKo','Transsend']);
  assert.equal(await page.locator('#formacao').count(), 0);
  const project = page.locator('.project').first();
  await project.scrollIntoViewIfNeeded();
  const beforeHover = await project.boundingBox();
  await project.hover();
  assert.deepEqual(await project.boundingBox(), beforeHover);
  assert.equal(await project.evaluate(el => getComputedStyle(el).transitionDuration), '0s');
  assert.equal(await page.locator('#stack').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(5, 5, 5)');
  assert.equal(await page.locator('.about-text p').count(), 1);
  assert.equal(await page.locator('main h1').innerText(), 'Desenvolvedor de Software');
  assert.equal(await page.locator('footer .footer-smile').innerText(), '=)');
  assert.equal(await page.locator('a[download]').count(), 2);
  for (const href of await page.locator('a[download]').evaluateAll(as => as.map(a=>a.getAttribute('href')))) {
    const pdf = await page.request.get(base + href);
    assert.equal(pdf.status(),200);
    assert.ok((await pdf.body()).subarray(0,5).equals(Buffer.from('%PDF-')));
    assert.ok((await pdf.body()).equals(fs.readFileSync(resumeSource)));
  }
  const legacyPdf = await page.request.get(base + '/Curriculo-Ericke-Castro.pdf', {maxRedirects: 0});
  assert.equal(legacyPdf.status(), 301);
  assert.equal(legacyPdf.headers().location, '/Ericke-Castro-Curriculo.pdf');
  const anchors = await page.locator('a[href^="#"], a[href^="/#"]').evaluateAll(as => as.map(a=>a.hash.slice(1)));
  for (const id of anchors) assert.equal(await page.locator(`[id="${id}"]`).count(), 1, id);
  await page.getByRole('link',{name:'Ver projeto DroidKo',exact:true}).click();
  await page.waitForURL('**/projetos/droidko');
  await page.waitForFunction(() => document.querySelector('meta[property="og:title"]').content === 'DroidKo | Ericke Castro');
  assert.equal(await page.locator('h1').innerText(),'DroidKo');
  await page.getByRole('link',{name:'Conhecer Transsend →',exact:true}).click();
  await page.waitForURL('**/projetos/transsend');
  await page.waitForFunction(() => document.querySelector('meta[property="og:title"]').content === 'Transsend | Ericke Castro');
  assert.equal(await page.locator('h1').innerText(),'Transsend');
  await page.goBack();
  await page.waitForFunction(() => document.querySelector('main h1')?.textContent === 'DroidKo');
  await page.getByRole('link',{name:'← voltar aos projetos',exact:true}).click();
  await page.waitForURL('**/#projetos');
  await page.waitForFunction(() => document.querySelector('meta[property="og:title"]').content.includes('Desenvolvedor de Software Android'));
  await page.goto(base + '/projetos/droidko/');
  await page.locator('main h1[tabindex="-1"]').waitFor();
  assert.equal(await page.locator('h1').innerText(),'DroidKo');
  await page.goto(base + '/pagina-inexistente');
  await page.getByRole('heading',{name:'Página não encontrada',exact:true}).waitFor();
  await page.waitForFunction(() => document.querySelector('meta[name="robots"]').content.includes('noindex'));
  await page.goto(base + '/');
  await page.locator('main h1[tabindex="-1"]').waitFor();
  await page.evaluate(() => document.activeElement.blur());
  for (let count = 0; count < 30; count++) {
    await page.keyboard.press('Tab');
    if (await page.evaluate(() => document.activeElement.classList.contains('skip-link'))) break;
  }
  assert.equal(await page.evaluate(() => document.activeElement.classList.contains('skip-link')), true);
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.activeElement.id === 'conteudo');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'conteudo');
  await page.emulateMedia({reducedMotion:'reduce'});
  assert.equal(await page.locator('.prompt i').evaluate(e=>getComputedStyle(e).animationName),'none');
  assert.deepEqual(errors,[]);
  assert.deepEqual(privateRequests,[]);
  fs.writeFileSync(path.join(outputDirectory, 'results.json'),JSON.stringify({results,projectNames,errors,privateRequests},null,2));
  console.log('PASS: 21 viewport/route combinations; 6 axe audits; refresh, direct access, SPA navigation, history, anchors, PDF bytes, metadata, private links, reduced motion.');
  await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});
