#!/usr/bin/env sh
set -eu

DOTNET_DIR="$PWD/.dotnet"

curl -fsSL https://dot.net/v1/dotnet-install.sh -o dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --channel 10.0 --install-dir "$DOTNET_DIR" --no-path
"$DOTNET_DIR/dotnet" publish Portfolio.csproj -c Release -o output
