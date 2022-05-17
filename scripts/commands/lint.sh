#!/bin/bash

function lint() {
  IGNORE_DIRS=()

  [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

  APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

  [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

  execute "bash ./scripts/run.sh git:branch-name"

  for APP_DIR in $APPS_DIRS; do
    if [[ -f "$APP_DIR/package.json" ]]; then

      APP_NAME="$(basename "$APP_DIR")"
      if [[ "${IGNORE_DIRS[*]}" =~ $APP_NAME ]]; then
        echo "Skipping $APP_NAME ..."
        continue
      fi

      cd "$APP_DIR" || error "Oops! Could not change directory to $APP_DIR."

      line
      info "Linting $APP_DIR ..."
      line

      yarn lint:format
      yarn lint:check
      yarn lint:ts:check

      cd ../../

      line
      info "Linting $APP_DIR ... DONE ✅ "
      line
    fi
  done
}
