#!/bin/bash

function print_system_statuses() {
  line

  info "You can access the apps at the following URLs: 👀 "

  line

  info "Backend Services: 📌 "

  line

  info " 🔴 Global API                           : http://api.turnly:$HTTP_PORT"
  info " 🟢 Widgets API                          : http://widgets.turnly:$HTTP_PORT"
  info " 🟢 Streaming API                        : http://stream.turnly:$HTTP_PORT"
  info " 🟢 RPC - Inter-services communication   : http://rpc.turnly:$RPC_PORT"
  info " 🔴 Billing API                          : http://billing.turnly:$HTTP_PORT"
  info " 🔴 Auth API                             : http://accounts.turnly:$HTTP_PORT"

  line

  info "Local Infrastructure Apps: 📌 "

  line

  info " 🟢 Traefik Dashboard                    : http://apps.turnly:$APP_PROXY_DASHBOARD_PORT"
  info " 🟢 Elastic Search Dashboard             : http://apps.turnly:$ELASTICSEARCH_KIBANA_PORT"
  info " 🟢 Mongo Dashboard                      : http://apps.turnly:$MONGO_UI_PORT"
  info " 🟢 Redis Dashboard                      : http://apps.turnly:$REDIS_ADMINER_PORT"
  info " 🟢 Storage Dashboard                    : http://apps.turnly:$MINIO_UI_PORT"
  info " 🟢 RabbitMQ Dashboard                   : http://apps.turnly:$RABBITMQ_UI_PORT"

  line
}
