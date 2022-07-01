#!/bin/bash

function lint() {
  IGNORE_DIRS=(
    "gateway"
  )

  APPS_DIRECTORY=$(get_env_variable "APPS_DIRECTORY")

  [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

  APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

  [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

  check_git_branch_name

  for APP_DIR in $APPS_DIRS; do
    if [[ -f "$APP_DIR/package.json" ]]; then
      APP_NAME=$(echo "@turnly/$(basename "$APP_DIR")" | awk '{print tolower($0)}')

      if [[ "${IGNORE_DIRS[*]}" =~ $APP_NAME ]]; then
        info "Skipping $APP_NAME ..."
        continue
      fi

      line
      info "Linting $APP_DIR ..."
      line

      if [[ $* == *"--all"* ]]; then
        yarn workspace "$APP_NAME" lint:format
        yarn workspace "$APP_NAME" lint:check
        yarn workspace "$APP_NAME" lint:ts:check
      elif git status -s | grep -q "$(basename "$APP_DIR")"; then
        yarn workspace "$APP_NAME" lint:format
        yarn workspace "$APP_NAME" lint:check
        yarn workspace "$APP_NAME" lint:ts:check
      fi

      line
      info "Linting $APP_DIR ... DONE ✅ "
      line
    fi
  done
}
