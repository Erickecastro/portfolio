#!/usr/bin/env sh
set -eu

PROJECT_DIR=$(CDPATH= cd -P "$(dirname "$0")/.." && pwd)
DOTNET_COMMAND=${DOTNET_COMMAND:-dotnet}

# This directory contains only generated publish artifacts.
rm -rf "$PROJECT_DIR/output"
"$DOTNET_COMMAND" publish "$PROJECT_DIR/Portfolio.csproj" -c Release -o "$PROJECT_DIR/output"
