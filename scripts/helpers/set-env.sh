#!/bin/bash

function set_env() {
    local ENV_FILE="$1"

    [[ ! -f "$ENV_FILE" ]] && error "Oops! No .env file found for $APP_NAME."

    line
    info "Checking and setting the environment variables for $APP_NAME..."

    [[ -n "$HTTP_PORT" ]] && sed -i '' -e "s#HTTP_PORT=.*#HTTP_PORT=$HTTP_PORT#g" "$ENV_FILE"
    [[ -n "$HTTP_PORT" ]] && sed -i '' -e "s#HTTP_PORT=.*#HTTP_PORT=$HTTP_PORT#g" "$ENV_FILE"

    [[ -n "$RPC_PORT" ]] && sed -i '' -e "s#RPC_PORT=.*#RPC_PORT=$RPC_PORT#g" "$ENV_FILE"
    [[ -n "$RPC_BIND_ADDRESS" ]] && sed -i '' -e "s#RPC_BIND_ADDRESS=.*#RPC_BIND_ADDRESS=$RPC_BIND_ADDRESS#g" "$ENV_FILE"
    [[ -n "$RPC_PORT" ]] && sed -i '' -e "s#RPC_CONSUMER_ADDRESS=.*#RPC_CONSUMER_ADDRESS=host.docker.internal:$RPC_PORT#g" "$ENV_FILE"

    info "Checking and setting the environment variables for $APP_NAME... DONE ✅ "
    line
}
