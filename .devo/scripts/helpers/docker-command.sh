#!/bin/bash

function docker_command() {
  COMPOSE_COMMAND="docker compose --project-name turnly --env-file .env $COMPOSE_FILES"
  DOCKER_COMMAND=$1
  shift

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  info "Checking if the networks exists and creating it if it doesn't... 🐳 "
  execute "docker network inspect turnly.network.internal >/dev/null 2>&1 || docker network create --internal --driver bridge turnly.network.internal"
  execute "docker network inspect turnly.network.public >/dev/null 2>&1 || docker network create --driver bridge turnly.network.public"

  line

  if [[ $DOCKER_COMMAND == "up" ]]; then
    execute "${COMPOSE_COMMAND} up -d --renew-anon-volumes $*"
  fi

  if [[ $DOCKER_COMMAND == "reload" ]]; then
    execute "${COMPOSE_COMMAND} restart -t 1 $*"
  fi

  if [[ $DOCKER_COMMAND == "down" ]]; then
    execute "${COMPOSE_COMMAND} down"
  fi
}
