#!/bin/bash

function setup() {
  local HOSTS=(
    "rpc.turnly"
    "accounts.turnly"
    "stream.turnly"
    "api.turnly"
    "widgets.turnly"
    "billing.turnly"
    "$APP_PROXY_HOST"
  )

  info "Setting up Athena in development mode with docker... 🚀 "

  line

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  info "Installing local dependencies... 📦 "
  execute "yarn install"

  line

  info "Setting up the hosts for proxy network communication... 📡 "
  set_hosts "${HOSTS[@]}"

  line

  info "Checking and copying the environment variables to the .env file for each app... 📝 "

  [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

  APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

  for APP_DIR in $APPS_DIRS; do
    APP_NAME="$(basename "$APP_DIR")"
    APP_ENV_FILE="$APP_DIR/.env"
    APP_ENV_EXAMPLE_FILE="$APP_DIR/.env.example"

    if [[ -f "$APP_ENV_EXAMPLE_FILE" ]]; then
      if [[ ! -f "$APP_ENV_FILE" ]]; then
        info "Copying the environment variables to the .env file for $APP_NAME... 📝 "
        execute "cp $APP_ENV_EXAMPLE_FILE $APP_ENV_FILE"
      else
        info "The app $APP_NAME already has a .env file... ✅ "

        set_infra_envs_for_apps "$APP_ENV_FILE"
      fi
    else
      warning "No .env.example file found for $APP_NAME. Skipping..."
    fi
  done
}
