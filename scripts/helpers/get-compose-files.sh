#!/bin/bash

function get_compose_files() {
    COMPOSE_FILES="-f ./docker/dc.networking.yml -f ./docker/dc.infrastructure.yml"

    [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

    APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

    # Check if apps are present
    [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

    for APP_DIR in $APPS_DIRS; do
        APP_NAME="$(basename "$APP_DIR")"
        COMPOSE_FILE="./docker/dc.$APP_NAME.yml"

        if [[ -f "$COMPOSE_FILE" ]]; then
            COMPOSE_FILES="$COMPOSE_FILES -f $COMPOSE_FILE"
        else
            [[ "$APP_NAME" == "README.md" ]] && continue

            warning "Oops! No compose file found for $APP_NAME. Skiping..."
        fi
    done

    [[ -z "$COMPOSE_FILES" ]] && error "Oops! No compose files found. Please verify your apps."

    line

    export COMPOSE_FILES
}
