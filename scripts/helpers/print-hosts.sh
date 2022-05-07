#!/bin/bash

function print_hosts() {
    line

    info "You can access the apps at the following URLs: 👀 "

    line

    info "Backend Services:"

    line

    info " 🌐 RESTful API: http://api.turnly:$HTTP_PORT"
    info " 🌐 Realtime: http://ws.turnly:$HTTP_PORT"
    info " 🌐 Heimdall IAM (Auth Service): http://api.iam.turnly:$HTTP_PORT"
    info " 🌐 RPC - Inter-services communication: http://rpc.turnly:$RPC_PORT"
    info " 🌐 RPC - Inter-services communication (inside docker): host.docker.internal:$RPC_PORT"

    line

    info "Frontend Apps:"

    line

    info " 🌐 Traffic Dashboard: http://$APP_PROXY_HOST:$APP_PROXY_DASHBOARD_PORT"
    info " 🌐 Heimdall IAM (Auth App): http://iam.turnly:$HTTP_PORT"
    info " 🌐 Backoffice: http://dashboard.turnly:$HTTP_PORT"
    info " 🌐 Helpdesk (Queuing System): http://app.turnly:$HTTP_PORT"

    line
}
