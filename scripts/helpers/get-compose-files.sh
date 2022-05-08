#!/bin/bash

function get_compose_files() {
    COMPOSE_FILES="-f ./docker/networking.yml -f ./docker/infrastructure.yml"

    IGNORE_DIRS=(
        "README.md"
        "shared"
        "rpc"
        "realtime"
        "http"
        "postgres"
        ".github"
        ".github-private"
    )

    [[ -z "$APPS_DIRECTORY" ]] && error "Oops! Environment variable APPS_DIRECTORY is not set."

    APPS_DIRS="$(ls -d "$APPS_DIRECTORY"/*)"

    [[ -z "$APPS_DIRS" ]] && error "Oops! No apps found in $APPS_DIRECTORY directory."

    for APP_DIR in $APPS_DIRS; do
        APP_NAME="$(basename "$APP_DIR")"
        COMPOSE_FILE="./docker/$APP_NAME.yml"

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
