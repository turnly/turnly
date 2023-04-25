#!/bin/bash

set -e

BASE_DIR=$(dirname "$0")
SHARED="$BASE_DIR/../../node_modules/@turnly/eslint-config/scripts"

if [[ ! -d "$SHARED" ]]; then
  yarn add https://github.com/turnly/configs.git -W
fi

# Helpers and bin sources
source "$BASE_DIR/base.helper.sh"

# Commands sources
source "$BASE_DIR/setup.command.sh"
source "$BASE_DIR/build.command.sh"
source "$BASE_DIR/gen-protos-unix.command.sh"
source "$BASE_DIR/gen-protos-windows.command.sh"

INPUT=$1
shift

COMMAND=$(echo "$INPUT" | awk '{print tolower($0)}')

info "Turnly gRPC Package Management 📦  • Current OS: $OS"

line

case $COMMAND in
build)
  get_services
  build
  ;;
setup)
  setup
  ;;
protos)
  get_services

  if [[ "$OS" == "WINDOWS" ]]; then
    gen_protos_windows
  else
    gen_protos_unix
  fi
  ;;
*)
  error "Unknown command: $COMMAND"
  ;;
esac
