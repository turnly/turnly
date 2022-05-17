#!/bin/bash

function start() {
  local HOSTS=(
    "rpc.turnly"
    "iam.turnly"
    "ws.turnly"
    "api.turnly"
    "$APP_PROXY_HOST"
  )

  info "Starting Turnly Apps in development mode with docker... 🚀 "

  line

  check_ports "$HTTP_PORT" "$RPC_PORT" "$APP_PROXY_DASHBOARD_PORT"

  docker_exec --up

  line

  info "Spinning up all the configured services... 🕓 "
  sleep 4
  info "Spinning up all the configured services... DONE ✅ "

  set_hosts "${HOSTS[@]}"

  print_hosts

  info "Starting Turnly Apps in development mode with docker... DONE ✅ "

  line
}
