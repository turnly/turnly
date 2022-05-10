#!/bin/bash

function git_status() {
    [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

    APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

    [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

    git status

    for APP_DIR in $APPS_DIRS; do
        if [[ -d "$APP_DIR/.git" ]]; then
            cd "$APP_DIR" || error "Oops! Could not change directory to $APP_DIR."

            line
            info "Checking $APP_DIR git status... 🔍 "
            line

            git status && cd ../../

            line
            info "Checking $APP_DIR git status... DONE ✅ "
            line
        fi
    done
}
