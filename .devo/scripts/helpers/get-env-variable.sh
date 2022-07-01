#!/bin/bash

function get_env_variable() {
  [[ -z "$1" ]] && error "Oops! Missing environment variable name."

  ENV_VARIABLE=$(grep "$1" .env | awk -F '=' '{print $2}' | xargs)

  [[ -z "$ENV_VARIABLE" ]] && error "Oops! Environment variable $1 is not set."

  echo "$ENV_VARIABLE"
}
