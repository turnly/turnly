#!/bin/bash

function print_hosts() {
    line

    info "You can access the apps at the following URLs: 👀 "

    line

    info "Backend Services: 📌 "

    line

    info " 🟢 RESTful API: http://api.turnly:$HTTP_PORT"
    info " 🟢 Realtime: http://ws.turnly:$HTTP_PORT"
    info " 🟢 Heimdall IAM (Auth Service): http://api.iam.turnly:$HTTP_PORT"
    info " 🟢 RPC - Inter-services communication: http://rpc.turnly:$RPC_PORT"
    info " 🟢 RPC - Inter-services communication (inside docker): host.docker.internal:$RPC_PORT"

    line

    info "Frontend Apps: 📌 "

    line

    info " 🟢 Heimdall IAM (Auth App): http://iam.turnly:$HTTP_PORT"
    info " 🟢 Backoffice: http://dashboard.turnly:$HTTP_PORT"
    info " 🟢 Helpdesk (Queuing System): http://app.turnly:$HTTP_PORT"

    line

    info "Local Infrastructure Apps: 📌 "

    line

    info " 🟢 Traffic Dashboard: http://$APP_PROXY_HOST:$APP_PROXY_DASHBOARD_PORT"
    info " 🟢 Elastic Search Dashboard: http://$APP_PROXY_HOST:$ES_KIBANA_PORT"
    info " 🟢 Redis Dashboard: http://$APP_PROXY_HOST:$REDIS_ADMINER_PORT"
    info " 🟢 Storage Dashboard: http://$APP_PROXY_HOST:$MINIO_UI_PORT"
    info " 🟢 Postgres Dashboard: http://$APP_PROXY_HOST:$ADMINER_PORT"
    info " 🟢 ElasticMQ Dashboard: http://$APP_PROXY_HOST:$SQS_UI_PORT"
    info " 🟢 RabbitMQ Dashboard: http://$APP_PROXY_HOST:$RABBITMQ_UI_PORT"
    info " 🟢 Jaeger Dashboard: http://$APP_PROXY_HOST:$JAEGER_UI_PORT"

    line
}
