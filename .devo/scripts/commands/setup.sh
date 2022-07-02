#!/bin/bash

function setup() {
  info "Setting up Athena in development mode with docker... 🚀 "

  line

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  info "Installing local dependencies... 📦 "
  execute "yarn install"

  line

  info "Setting up the domains in hosts file... 📡 "
  set_hosts "${TURNLY_DOMAINS[@]}"

  line
}
