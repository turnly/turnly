#!/bin/bash

SHARED_HELPERS="$SHARED/helpers"
BIN="$SHARED/bin"

# Bin sources
source "$BIN/print.sh"
source "$BIN/os.sh"
source "$BIN/dir.sh"
source "$BIN/package.sh"
source "$BIN/execute.sh"

# Helpers sources from shared
source "$SHARED_HELPERS/git-branch-name.sh"

# Helpers sources
source "$BASE_DIR/get-services.helper.sh"
