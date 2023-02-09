#!/bin/bash

function stop() {
  info "Stopping the docker containers... 🐳 "

  line

  docker_command down

  line

  info "Stopped the docker containers... DONE ✅ "

  line
}
