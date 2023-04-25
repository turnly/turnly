#!/bin/bash

function get_services() {
  SERVICES_PATH="./packages/grpc/src/producers"
  SERVICES="$SERVICES_PATH/**"

  IGNORE_COMMON_PATH="$SERVICES_PATH/common"

  info "Getting services from $SERVICES ..."

  PROTOS=()

  while IFS= read -r -d '' service; do
    line
    info "Found service: $service ..."
    line
    PROTOS+=("$service")
  done < <(find $SERVICES -maxdepth 1 -mindepth 1 -type d ! -path "*${IGNORE_COMMON_PATH}*" -print0)

  info "Getting services from $SERVICES ... DONE ✅ "

  export PROTOS
  export SERVICES
  export SERVICES_PATH
}
