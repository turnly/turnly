#!/bin/bash

function docker_command() {
  COMPOSE_COMMAND="docker compose --project-name turnly --env-file .env $COMPOSE_FILES"
  DOCKER_COMMAND=$1
  shift

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  if [[ $DOCKER_COMMAND == "up" ]]; then
    execute "${COMPOSE_COMMAND} up -d $*"
  fi

  if [[ $DOCKER_COMMAND == "reload" ]]; then
    execute "${COMPOSE_COMMAND} restart -t 1 $*"
  fi

  if [[ $DOCKER_COMMAND == "down" ]]; then
    execute "${COMPOSE_COMMAND} down"
  fi

  if [[ $DOCKER_COMMAND == "clean" ]]; then
    execute "${COMPOSE_COMMAND} down --volumes --remove-orphans --rmi local"
  fi
}
