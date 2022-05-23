#!/bin/bash

SHARED_HELPERS="$SHARED/helpers"
BIN="$SHARED/bin"

# Bin sources
source "$BIN/print.sh"
source "$BIN/os.sh"
source "$BIN/dir.sh"
source "$BIN/package.sh"
source "$BIN/execute.sh"
source "$BIN/hold-on.sh"

# Helpers sources from shared
source "$SHARED_HELPERS/get-env.sh"
source "$SHARED_HELPERS/check-ports.sh"
source "$SHARED_HELPERS/set-hosts.sh"
source "$SHARED_HELPERS/git-branch-name.sh"

# Helpers sources
source "$HELPERS/get-composes.sh"
source "$HELPERS/print-system-statuses.sh"
source "$HELPERS/set-infra-envs-for-apps.sh"
source "$HELPERS/get-configs.sh"
source "$HELPERS/yarn-lock.sh"
source "$HELPERS/docker-command.sh"
