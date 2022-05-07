#!/bin/bash

function start() {
  info "Starting Turnly Apps in development mode with docker... 🚀 "

  line

  check_ports "$HTTP_PORT" "$RPC_PORT" "$APP_PROXY_DASHBOARD_PORT"

  docker_exec --up

  info "Spinning up all the configured services... 🕓 "
  sleep 4
  info "Spinning up all the configured services... DONE ✅ "

  set_hosts

  print_hosts

  info "Starting Turnly Apps in development mode with docker... DONE ✅ "

  line
}
