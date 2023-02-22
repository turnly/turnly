#!/usr/bin/env bash

function lint() {
  info "Linting..."

  check_git_branch_name

  yarn lint:format
  yarn lint:check
  yarn lint:ts:check

  info "Linting... DONE ✅ "
}
