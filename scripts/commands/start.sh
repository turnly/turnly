#!/bin/bash

function start() {
  info "Starting Turnly Apps in development mode with docker... 🚀 "

  line

  check_ports "$HTTP_PORT" "$RPC_PORT" "$APP_PROXY_DASHBOARD_PORT"

  docker_exec --up

  info "Spinning up all the configured services... 🕓 "
  sleep 4
  info "Spinning up all the configured services... DONE ✅ "

  line

  info "You can access the apps at the following URLs: 👀 "

  line

  info " 🌐 Traffic Dashboard: http://$APP_PROXY_HOST:$APP_PROXY_DASHBOARD_PORT"
  info " 🌐 HTTP: http://$APP_PROXY_HOST:$HTTP_PORT"
  info " 🌐 RPC: http://$APP_PROXY_HOST:$RPC_PORT"

  line

  info "The $APP_PROXY_HOST is equivalent to localhost. 👀 "

  line

  info "Starting Turnly Apps in development mode with docker... DONE ✅ "

  line
}
