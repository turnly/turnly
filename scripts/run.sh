#!/bin/bash

set -e

BASE_DIR=$(dirname "$0")

BIN="$BASE_DIR/bin"
COMMANDS="$BASE_DIR/commands"
HELPERS="$BASE_DIR/helpers"

# Bin sources
source "$BIN/print.sh"
source "$BIN/os.sh"
source "$BIN/dir.sh"
source "$BIN/package.sh"
source "$BIN/execute.sh"

# Helpers sources
source "$HELPERS/get-env.sh"
source "$HELPERS/get-compose-files.sh"
source "$HELPERS/check-ports.sh"
source "$HELPERS/set-hosts.sh"
source "$HELPERS/print-hosts.sh"
source "$HELPERS/set-env.sh"

# Commands sources
source "$COMMANDS/docker.sh"
source "$COMMANDS/lint.sh"
source "$COMMANDS/start.sh"

INPUT=$1
shift

COMMAND=$(echo "$INPUT" | awk '{print tolower($0)}')

info "Turnly Docker-backed Infrastructure Management 📦 • Current OS: $OS"

line

info "Getting the environment variables... 🔧"
get_env

line

info "Getting the docker compose files... 🔧"

line

get_compose_files

info "Getting the docker compose files... DONE ✅ "

line

case $COMMAND in
start | dev | develop)
  start "$@"
  ;;
docker)
  docker_exec "$@"
  ;;
lint | lint:format | lint:check | lint:ts:check)
  lint
  ;;
*)
  error "Unknown command: $COMMAND"
  ;;
esac
