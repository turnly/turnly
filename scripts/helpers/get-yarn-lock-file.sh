#!/bin/bash

function get_yarn_lock_file() {
  [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

  APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

  [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

  for APP_DIR in $APPS_DIRS; do
    if [[ $* == *"--down"* ]]; then
      rm -f "$APP_DIR/yarn.lock"
    else
      cp yarn.lock "$APP_DIR/yarn.lock"
    fi
  done
}
