#!/bin/bash

function yarn_lock() {
  IGNORE_DIRS=(
    ".gitkeep"
  )

  [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

  APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

  [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

  for APP_DIR in $APPS_DIRS; do
    if [[ "${IGNORE_DIRS[*]}" == *"$APP_NAME"* ]] &>/dev/null; then
      continue
    fi

    if [[ $* == *"--remove"* ]]; then
      rm -f "$APP_DIR/yarn.lock"
    fi

    if [[ $* == *"--copy"* ]]; then
      cp yarn.lock "$APP_DIR/yarn.lock"
    fi
  done
}
