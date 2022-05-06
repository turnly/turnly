#!/usr/bin/env bash

function get_env() {
    local ENV_FILE=".env"

    if [[ ! -f $ENV_FILE ]]; then
        info "Copying the environment file... 🔧"

        [[ ! -f .env.example ]] && error "The environment file doesn't exist. Please try again."

        cp .env.example $ENV_FILE

        info "Copying the environment file... DONE ✅ "
    fi

    if [ -f "$ENV_FILE" ]; then
        set -a

        info "Loading the environment file... 🔧"
        source .env
        set +a
    fi

    info "Loading the environment file... DONE ✅ "
}
