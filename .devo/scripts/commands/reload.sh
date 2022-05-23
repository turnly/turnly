#!/bin/bash

function reload() {
  info "Reloading the docker containers... 🐳 "

  if [[ $* == *"-s"* ]]; then
    EXECUTE_SERVICES=()

    while getopts "s:" opt; do
      case $opt in
      s)
        [[ "${EXECUTE_SERVICES[*]}" != *"${OPTARG}"* ]] && EXECUTE_SERVICES+=("${OPTARG}")
        ;;
      \?)
        error "Invalid option: -$OPTARG"
        ;;
      esac
    done
  fi

  docker_command reload "${EXECUTE_SERVICES[@]}"

  line

  info "Reloading the docker containers... DONE ✅ "

  line
}
