#!/bin/bash

function setup() {
  info "Setting up Turnly in development mode with docker... 🚀 "

  line

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  info "Installing local dependencies for typing... 📦 "
  execute "yarn install"

  line

  info "Setting up the domains in hosts file... 📡 "
  set_hosts "${TURNLY_DOMAINS[@]}"

  line

  info "Create the docker network if it doesn't exist... 🐳"
  execute "docker network inspect turnly >/dev/null 2>&1 || docker network create turnly"

  line
}
