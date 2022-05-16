#!/bin/bash

function get_compose_files() {
  COMPOSE_FILES="-f ./compose/networking.yml"

  IGNORE_DIRS=(
    ".gitkeep"
  )

  INFRA_COMPOSE_FILES=$(find ./compose/infrastructure -name "*.yml" -type f)

  for file in $INFRA_COMPOSE_FILES; do
    COMPOSE_FILES="$COMPOSE_FILES -f $file"
  done

  [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

  APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

  [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

  for APP_DIR in $APPS_DIRS; do
    APP_NAME="$(basename "$APP_DIR")"
    COMPOSE_FILE="./compose/apps/$APP_NAME.yml"

    if [[ -f "$COMPOSE_FILE" ]]; then
      COMPOSE_FILES="$COMPOSE_FILES -f $COMPOSE_FILE"

      [[ -f "$APP_DIR/.env" ]] && set_env "$APP_DIR/.env"
    else
      if [[ "${IGNORE_DIRS[*]}" == *"$APP_NAME"* ]] &>/dev/null; then
        continue
      fi

      warning "Oops! No compose file found for $APP_NAME. Skiping..."
    fi
  done

  [[ -z "$COMPOSE_FILES" ]] && error "Oops! No compose files found. Please verify your apps."

  line

  export COMPOSE_FILES
}
