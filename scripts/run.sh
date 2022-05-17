#!/bin/bash

set -e

BASE_DIR=$(dirname "$0")
SHARED="$BASE_DIR/../node_modules/@turnly/eslint-config/scripts"

BIN="$SHARED/bin"
COMMANDS="$BASE_DIR/commands"
HELPERS="$BASE_DIR/helpers"
SHARED_HELPERS="$SHARED/helpers"

# Bin sources
source "$BIN/print.sh"
source "$BIN/os.sh"
source "$BIN/dir.sh"
source "$BIN/package.sh"
source "$BIN/execute.sh"
source "$BIN/hold-on.sh"

# Helpers sources from shared
source "$SHARED_HELPERS/get-env.sh"
source "$SHARED_HELPERS/check-ports.sh"
source "$SHARED_HELPERS/set-hosts.sh"
source "$SHARED_HELPERS/git-branch-name.sh"

# Helpers sources
source "$HELPERS/get-compose-files.sh"
source "$HELPERS/print-hosts.sh"
source "$HELPERS/set-env.sh"
source "$HELPERS/get-config.sh"

# Commands sources
source "$COMMANDS/docker.sh"
source "$COMMANDS/lint.sh"
source "$COMMANDS/start.sh"

INPUT=$1
shift

COMMAND=$(echo "$INPUT" | awk '{print tolower($0)}')

info "Turnly Docker-backed Infrastructure Management 📦 • Current OS: $OS"

line

case $COMMAND in
start | dev | develop)
  get_config
  start "$@"
  ;;
docker)
  get_config
  docker_exec "$@"
  ;;
git:branch-name | branch-name)
  check_git_branch_name
  ;;
lint | lint:format | lint:check | lint:ts:check)
  get_config
  lint
  ;;
*)
  error "Unknown command: $COMMAND"
  ;;
esac
