#!/usr/bin/env bash

function get_services() {
  SERVICES_PATH="./src/producers"
  SERVICES="$SERVICES_PATH/**"
  IGNORE_COMMON_PATH="$SERVICES_PATH/common"
  PROTOS=()

  while IFS= read -r -d '' service; do
    PROTOS+=("$service")
  done < <(find $SERVICES -maxdepth 1 -mindepth 1 -type d ! -path "*${IGNORE_COMMON_PATH}*" -print0)

  export PROTOS
}

get_services

for proto in "${PROTOS[@]}"; do
  cp -R ${proto}/* "${proto/src/dist}"
done
