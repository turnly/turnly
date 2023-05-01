// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var digital$signage_requests_pb = require('./digital-signage.requests_pb.js');
var digital$signage_responses_pb = require('./digital-signage.responses_pb.js');

function serialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageRequest(arg) {
  if (!(arg instanceof digital$signage_requests_pb.GetPairingCodeDigitalSignageRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.digital_signage.GetPairingCodeDigitalSignageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageRequest(buffer_arg) {
  return digital$signage_requests_pb.GetPairingCodeDigitalSignageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageResponse(arg) {
  if (!(arg instanceof digital$signage_responses_pb.GetPairingCodeDigitalSignageResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.digital_signage.GetPairingCodeDigitalSignageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageResponse(buffer_arg) {
  return digital$signage_responses_pb.GetPairingCodeDigitalSignageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageRequest(arg) {
  if (!(arg instanceof digital$signage_requests_pb.PairToLocationDigitalSignageRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.digital_signage.PairToLocationDigitalSignageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageRequest(buffer_arg) {
  return digital$signage_requests_pb.PairToLocationDigitalSignageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageResponse(arg) {
  if (!(arg instanceof digital$signage_responses_pb.PairToLocationDigitalSignageResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.digital_signage.PairToLocationDigitalSignageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageResponse(buffer_arg) {
  return digital$signage_responses_pb.PairToLocationDigitalSignageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DigitalSignageService = exports.DigitalSignageService = {
  getPairingCode: {
    path: '/turnly.channels.v1.digital_signage.DigitalSignage/GetPairingCode',
    requestStream: false,
    responseStream: false,
    requestType: digital$signage_requests_pb.GetPairingCodeDigitalSignageRequest,
    responseType: digital$signage_responses_pb.GetPairingCodeDigitalSignageResponse,
    requestSerialize: serialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageRequest,
    requestDeserialize: deserialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageRequest,
    responseSerialize: serialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageResponse,
    responseDeserialize: deserialize_turnly_channels_v1_digital_signage_GetPairingCodeDigitalSignageResponse,
  },
  pairToLocation: {
    path: '/turnly.channels.v1.digital_signage.DigitalSignage/PairToLocation',
    requestStream: false,
    responseStream: false,
    requestType: digital$signage_requests_pb.PairToLocationDigitalSignageRequest,
    responseType: digital$signage_responses_pb.PairToLocationDigitalSignageResponse,
    requestSerialize: serialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageRequest,
    requestDeserialize: deserialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageRequest,
    responseSerialize: serialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageResponse,
    responseDeserialize: deserialize_turnly_channels_v1_digital_signage_PairToLocationDigitalSignageResponse,
  },
};

exports.DigitalSignageClient = grpc.makeGenericClientConstructor(DigitalSignageService);
