#!/bin/bash

function docker_exec() {
    COMPOSE_COMMAND="docker compose --project-name turnly --env-file .env $COMPOSE_FILES"

    for flag in "$@"; do
        [[ $flag == "--up" || $flag == "up" ]] && execute "${COMPOSE_COMMAND} up -d --build"
        [[ $flag == "--down" || $flag == "down" ]] && execute "${COMPOSE_COMMAND} down"
        [[ $flag == "--reload" || $flag == "reload" ]] && execute "${COMPOSE_COMMAND} restart"

        [[ $flag == "--logs" || $flag == "logs" ]] && eval "${COMPOSE_COMMAND} logs -f"
        [[ $flag == "--logs-all" || $flag == "logs-all" ]] && eval "${COMPOSE_COMMAND} logs -f --tail=all"
        [[ $flag == "--logs-since" || $flag == "logs-since" ]] && eval "${COMPOSE_COMMAND} logs -f --tail=all --since=1h"
        [[ $flag == "--logs-since-until" || $flag == "logs-since-until" ]] && eval "${COMPOSE_COMMAND} logs -f --tail=all --since=1h --until=1h"

        if [[ $flag == "--clean" || $flag == "clean" ]]; then
            info "Burning down resources... 🔧"

            execute "${COMPOSE_COMMAND} down --volumes --remove-orphans --rmi local"

            info "Burning down resources... DONE ✅ "

            line
        fi
    done
}
