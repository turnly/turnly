#!/bin/bash

function docker_exec() {
  COMPOSE_COMMAND="docker compose --project-name turnly --env-file .env $COMPOSE_FILES"

  for flag in "$@"; do
    if [[ $flag == "--up" || $flag == "up" ]]; then
      info "Please wait, the next command will take a few minutes... 🕐 "

      line
      if [[ $* == *"--build"* ]]; then
        execute "${COMPOSE_COMMAND} up -d --build"
      else
        execute "${COMPOSE_COMMAND} up -d"
      fi
    fi

    if [[ $flag == "--down" || $flag == "down" ]]; then
      info "Please wait, the next command will take a few minutes... 🕐 "

      line

      get_yarn_lock_file --down
      execute "${COMPOSE_COMMAND} down"
    fi

    if [[ $flag == "--reload" || $flag == "reload" ]]; then
      info "Please wait, the next command will take a few minutes... 🕐 "

      line
      execute "${COMPOSE_COMMAND} restart"
    fi

    [[ $flag == "--logs" || $flag == "logs" ]] && eval "${COMPOSE_COMMAND} logs -f --tail=all --since=1h"
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
