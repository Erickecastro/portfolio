// Keep the existing static metadata in sync when navigating within the Blazor SPA.
window.portfolioMetadata = {
    update(title, description, url, noIndex) {
        const values = {
            'meta[name="description"]': description,
            'meta[property="og:title"]': title,
            'meta[property="og:description"]': description,
            'meta[property="og:url"]': url,
            'meta[name="twitter:title"]': title,
            'meta[name="twitter:description"]': description,
            'meta[name="robots"]': noIndex ? 'noindex, follow' : 'index, follow'
        };
        for (const [selector, content] of Object.entries(values)) {
            document.querySelector(selector)?.setAttribute('content', content);
        }
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
        const structuredData = document.querySelector('#structured-data');
        if (structuredData) {
            const data = JSON.parse(structuredData.textContent);
            const page = data['@graph'].find(item => item['@type'] === 'WebPage');
            page['@id'] = url;
            page.url = url;
            page.name = title;
            page.description = description;
            structuredData.textContent = JSON.stringify(data);
        }
    }
};

window.portfolioNavigation = {
    focusContent() {
        document.getElementById('conteudo')?.focus();
    }
};
