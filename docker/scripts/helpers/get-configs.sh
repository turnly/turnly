#!/bin/bash

function get_configs() {
  info "Getting the environment variables... 🔧"
  get_env

  line

  info "Getting the docker compose files... 🔧"
  get_composes
}
