#!/usr/bin/env bash

function build() {
  cd packages/grpc || exit

  info "Building sources on $OS system ..."
  yarn build
  info "Building sources on $OS system ... DONE ✅ "

  line

  for proto in "${PROTOS[@]}"; do
    DIST="${proto/src/dist}"

    info "Copying proto sources to $DIST ..."
    cp -R ${proto}/* "$DIST"
    info "Copying proto sources to $DIST ... DONE ✅ "
  done
}
