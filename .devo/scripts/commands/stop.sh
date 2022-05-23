#!/bin/bash

function stop() {
  info "Stopping the docker containers... 🐳 "

  line

  info "Removing the yarn.lock from each app... 📝 "
  yarn_lock --remove

  docker_command down

  line

  info "Stopped the docker containers... DONE ✅ "

  line
}
