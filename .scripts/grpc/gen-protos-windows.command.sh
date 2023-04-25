#!/usr/bin/env bash

function gen_protos_windows() {
  for proto in "${PROTOS[@]}"; do

    BASENAME="$(basename "${proto}")"
    PROTOS_OUT_DIR="${proto}/generated"
    COMMON_PROTO_PATH="${proto}/common.proto"

    PROTOS_OUT_DIR="$(cygpath -w "$PROTOS_OUT_DIR")"
    COMMON_PROTO_PATH="$(cygpath -w "$COMMON_PROTO_PATH")"

    info "Generating sources for ${BASENAME} ..."

    # Copy common.proto to the proto directory
    [[ ! -f "$COMMON_PROTO_PATH" ]] && cp "${SERVICES_PATH}\\common\\common.proto" "${proto}"

    # Generate JavaScript code
    yarn run grpc_tools_node_protoc \
      --js_out=import_style=commonjs,binary:"${PROTOS_OUT_DIR}" \
      --grpc_out=grpc_js:"${PROTOS_OUT_DIR}" \
      --plugin=protoc-gen-grpc=".\\node_modules\\.bin\\grpc_tools_node_protoc_plugin.cmd" \
      -I="${proto}" \
      "${proto}"/*.proto

    # Generate TypeScript code (d.ts)
    yarn run grpc_tools_node_protoc \
      --plugin=protoc-gen-ts=".\\node_modules\\.bin\\protoc-gen-ts.cmd" \
      --ts_out=grpc_js:"${PROTOS_OUT_DIR}" \
      -I="${proto}" \
      "${proto}"/*.proto

    # Delete common.proto from the proto directory
    [[ -f "$COMMON_PROTO_PATH" ]] && rm -rf "$COMMON_PROTO_PATH"

    info "Generating sources for ${BASENAME} ... DONE ✅"
  done
}
