#!/bin/bash

function start() {
  info "Starting Turnly in development mode with docker... 🚀 "

  line

  if [[ $* == *"-s"* ]]; then
    while getopts "s:" opt; do
      case $opt in
      s)
        [[ "${EXECUTE_SERVICES[*]}" != *"${OPTARG}"* ]] && EXECUTE_SERVICES+=("${OPTARG}")
        ;;
      \?) ;;
      esac
    done

    info "Starting the selected services... 🚀 "
  fi

  info "Setting up docker containers... 🐳 "

  if [[ $* == *"--build"* ]]; then
    docker_command up --build "${EXECUTE_SERVICES[@]}"
  else
    docker_command up "${EXECUTE_SERVICES[@]}"
  fi

  line

  info "Spinning up all the configured services... 🕓 "
  sleep 8

  print_system_statuses

  info "Starting Turnly in development mode with docker... DONE ✅ "

  line
}
