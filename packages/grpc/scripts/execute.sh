#!/bin/bash

set -e

BASE_DIR=$(dirname "$0")
SHARED="$BASE_DIR/../node_modules/@turnly/eslint-config/scripts"

if [[ ! -d "$SHARED" ]]; then
  yarn add https://github.com/turnly/configs.git -W
fi

COMMANDS="$BASE_DIR/commands"
HELPERS="$BASE_DIR/helpers"

# Helpers and bin sources
source "$HELPERS/helpers.sh"

# Commands sources
source "$COMMANDS/setup.sh"
source "$COMMANDS/build.sh"
source "$COMMANDS/gen-protos-unix.sh"
source "$COMMANDS/gen-protos-windows.sh"

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
