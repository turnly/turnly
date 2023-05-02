// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var signage$displays_requests_pb = require('./signage-displays.requests_pb.js');
var signage$displays_responses_pb = require('./signage-displays.responses_pb.js');

function serialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.GetPairingCodeSignageDisplayRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.GetPairingCodeSignageDisplayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayRequest(buffer_arg) {
  return signage$displays_requests_pb.GetPairingCodeSignageDisplayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.GetPairingCodeSignageDisplayResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.GetPairingCodeSignageDisplayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayResponse(buffer_arg) {
  return signage$displays_responses_pb.GetPairingCodeSignageDisplayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.PairToLocationSignageDisplayRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.PairToLocationSignageDisplayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayRequest(buffer_arg) {
  return signage$displays_requests_pb.PairToLocationSignageDisplayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.PairToLocationSignageDisplayResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.PairToLocationSignageDisplayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayResponse(buffer_arg) {
  return signage$displays_responses_pb.PairToLocationSignageDisplayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.UnpairSignageDisplayRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.UnpairSignageDisplayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayRequest(buffer_arg) {
  return signage$displays_requests_pb.UnpairSignageDisplayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.UnpairSignageDisplayResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.UnpairSignageDisplayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayResponse(buffer_arg) {
  return signage$displays_responses_pb.UnpairSignageDisplayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SignageDisplaysService = exports.SignageDisplaysService = {
  getPairingCode: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/GetPairingCode',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.GetPairingCodeSignageDisplayRequest,
    responseType: signage$displays_responses_pb.GetPairingCodeSignageDisplayResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_GetPairingCodeSignageDisplayResponse,
  },
  pairToLocation: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/PairToLocation',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.PairToLocationSignageDisplayRequest,
    responseType: signage$displays_responses_pb.PairToLocationSignageDisplayResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_PairToLocationSignageDisplayResponse,
  },
  unpair: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/Unpair',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.UnpairSignageDisplayRequest,
    responseType: signage$displays_responses_pb.UnpairSignageDisplayResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_UnpairSignageDisplayResponse,
  },
};

exports.SignageDisplaysClient = grpc.makeGenericClientConstructor(SignageDisplaysService);
