#!/bin/bash

function get_config() {
  info "Getting the environment variables... 🔧"
  get_env

  line

  info "Getting the docker compose files... 🔧"

  line

  get_compose_files

  info "Getting the docker compose files... DONE ✅ "

  line
}
