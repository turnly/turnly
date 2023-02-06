#!/bin/bash

function setup() {
  info "Setting up Turnly in development mode with docker... 🚀 "

  line

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  info "Installing local dependencies for typing... 📦 "
  execute "yarn install"

  line
}
