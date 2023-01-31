#!/bin/bash

set -e

BASE_DIR=$(dirname "$0")
SHARED="$BASE_DIR/../node_modules/@turnly/eslint-config/scripts"

if [[ ! -d "$SHARED" ]]; then
  yarn add https://github.com/turnly/configs.git -W
fi

COMMANDS="$BASE_DIR/scripts/commands"
HELPERS="$BASE_DIR/scripts/helpers"

# Helpers and bin sources
source "$HELPERS/helpers.sh"

# Commands sources
source "$COMMANDS/setup.sh"
source "$COMMANDS/start.sh"
source "$COMMANDS/stop.sh"
source "$COMMANDS/reload.sh"
source "$COMMANDS/lint.sh"

INPUT=$1
shift

COMMAND=$(echo "$INPUT" | awk '{print tolower($0)}')

EXECUTE_SERVICES=()

info "Turnly Docker-backed infrastructure provisioning and development systems management. 📦 • Current OS: $OS"

line

# Sets verbose mode to true if the command includes the "--verbose" flag
[[ $* == *"--verbose"* ]] && VERBOSE=true

# Sets the default infrastructure services
if [[ $* == *"-s"* ]]; then
  EXECUTE_SERVICES=(
    "gateway"
    "elasticsearch"
    "kibana"
    "fluentd"
    "rabbitmq"
    "redis"
    "mongo"
    "mongo_ui"
  )
fi

case $COMMAND in
setup)
  get_configs
  setup "$@"
  ;;
start)
  get_configs
  start "$@"
  ;;
stop)
  get_configs
  stop "$@"
  ;;
reload)
  get_configs
  reload "$@"
  ;;
lint)
  lint "$@"
  ;;
*)
  VERBOSE=true
  execute "yarn workspace @turnly/$COMMAND $*"
  ;;
esac
