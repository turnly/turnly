#!/bin/bash

function print_system_statuses() {
  line

  info "You can access the apps at the following URLs: 👀 "

  line

  info "Backend Services: 📌 "

  line

  info " 🔴 -> Unavailable"
  info " 🟢 -> Available"

  line

  info " 🟢 Widgets API                             : http://{organization}.$APP_DOMAIN/api/widgets"
  info " 🟢 Helpdesk Real Time Messaging API        : http://{organization}.$APP_DOMAIN/api/rtm/helpdesk"
  info " 🟢 Widgets Real Time Messaging API         : http://{organization}.$APP_DOMAIN/api/rtm/widgets"

  line

  info "Local Infrastructure UIs: 📌 "

  line

  info " 🟢 Elastic Search Dashboard                : http://infra.$APP_DOMAIN:$ELASTICSEARCH_UI_PORT"
  info " 🟢 Mongo Dashboard                         : http://infra.$APP_DOMAIN:$MONGO_UI_PORT"
  info " 🟢 Redis Dashboard                         : http://infra.$APP_DOMAIN:$REDIS_UI_PORT"
  info " 🟢 RabbitMQ Dashboard                      : http://infra.$APP_DOMAIN:$RABBITMQ_UI_PORT"

  line

  info "Observability (Debugging) UIs: 📌 "

  line

  info " 🟢 Traefik Dashboard                       : http://infra.$APP_DOMAIN:$TRAEFIK_UI_PORT"
  info " 🟢 Tracing Dashboard                       : http://infra.$APP_DOMAIN:$TRACING_UI_PORT"
  info " 🟢 FluentD Logs (Index: logs-*)            : http://infra.$APP_DOMAIN:$ELASTICSEARCH_UI_PORT/app/dev_tools#/console"

  line
}
