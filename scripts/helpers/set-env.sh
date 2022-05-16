#!/bin/bash

function set_env() {
  local ENV_FILE="$1"
  local LOCAL_ENV=".env"

  [[ ! -f "$ENV_FILE" ]] && error "Oops! No .env file found for $APP_NAME."

  line
  info "Checking and setting the environment variables for $APP_NAME..."

  # Read the .env file and save to array for later use in the script itself
  while IFS='=' read -r key value; do
    key=$(echo "$key" | tr '.' '_' | sed -e 's/^export //g' | sed -e 's/=/ /g' | awk '{print $1}')
    value=$(echo "$value" | sed -e 's/^"//g' | sed -e 's/"$//g')

    if [[ -n "$key" && -n "$value" ]]; then
      if grep -q "$key" "$ENV_FILE"; then
        sed -i '' -e "s#$key=.*#$key=$value#g" "$ENV_FILE"
      else
        {
          echo ""
          echo "# ci(athena): auto-generated configuration, do not edit here."
          echo "$key=$value"
        } >>"$ENV_FILE"
      fi
    fi

  done <$LOCAL_ENV

  info "Checking and setting the environment variables for $APP_NAME... DONE ✅ "
  line
}
