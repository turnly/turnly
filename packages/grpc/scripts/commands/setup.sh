#!/usr/bin/env bash

function setup() {
  ARCH=$(node -p process.arch)

  info "Installing dependencies..."

  if [[ "$ARCH" == "arm64" ]]; then
    info "Using $ARCH architecture for MacBook Apple M1 chip"

    # First install without running the package scripts.
    yarn install --ignore-scripts

    # Go to grpc-tools package
    pushd node_modules/grpc-tools || exit

    # Run node-pre-gyp and change architecture from arm64 to x64
    node_modules/.bin/node-pre-gyp install --target_arch=x64

    # Go back to your original working directory
    popd || exit
  else
    yarn install
  fi

  npx husky install

  info "Installing dependencies... DONE ✅ "
}
