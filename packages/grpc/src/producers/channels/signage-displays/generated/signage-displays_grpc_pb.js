// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var signage$displays_requests_pb = require('./signage-displays.requests_pb.js');
var signage$displays_responses_pb = require('./signage-displays.responses_pb.js');

function serialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.GeneratePairingCodeSignageDisplayRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.GeneratePairingCodeSignageDisplayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayRequest(buffer_arg) {
  return signage$displays_requests_pb.GeneratePairingCodeSignageDisplayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.GeneratePairingCodeSignageDisplayResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.GeneratePairingCodeSignageDisplayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayResponse(buffer_arg) {
  return signage$displays_responses_pb.GeneratePairingCodeSignageDisplayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.GetOneSignageDisplayRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.GetOneSignageDisplayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayRequest(buffer_arg) {
  return signage$displays_requests_pb.GetOneSignageDisplayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.GetOneSignageDisplayResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.GetOneSignageDisplayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayResponse(buffer_arg) {
  return signage$displays_responses_pb.GetOneSignageDisplayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_ListSignageDisplaysRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.ListSignageDisplaysRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.ListSignageDisplaysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_ListSignageDisplaysRequest(buffer_arg) {
  return signage$displays_requests_pb.ListSignageDisplaysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_ListSignageDisplaysResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.ListSignageDisplaysResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.ListSignageDisplaysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_ListSignageDisplaysResponse(buffer_arg) {
  return signage$displays_responses_pb.ListSignageDisplaysResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayRequest(arg) {
  if (!(arg instanceof signage$displays_requests_pb.UpdateSignageDisplayRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.UpdateSignageDisplayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayRequest(buffer_arg) {
  return signage$displays_requests_pb.UpdateSignageDisplayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayResponse(arg) {
  if (!(arg instanceof signage$displays_responses_pb.UpdateSignageDisplayResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.signage_displays.UpdateSignageDisplayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayResponse(buffer_arg) {
  return signage$displays_responses_pb.UpdateSignageDisplayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SignageDisplaysService = exports.SignageDisplaysService = {
  generatePairingCode: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/GeneratePairingCode',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.GeneratePairingCodeSignageDisplayRequest,
    responseType: signage$displays_responses_pb.GeneratePairingCodeSignageDisplayResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_GeneratePairingCodeSignageDisplayResponse,
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
  getOne: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.GetOneSignageDisplayRequest,
    responseType: signage$displays_responses_pb.GetOneSignageDisplayResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_GetOneSignageDisplayResponse,
  },
  list: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/List',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.ListSignageDisplaysRequest,
    responseType: signage$displays_responses_pb.ListSignageDisplaysResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_ListSignageDisplaysRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_ListSignageDisplaysRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_ListSignageDisplaysResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_ListSignageDisplaysResponse,
  },
  update: {
    path: '/turnly.channels.v1.signage_displays.SignageDisplays/Update',
    requestStream: false,
    responseStream: false,
    requestType: signage$displays_requests_pb.UpdateSignageDisplayRequest,
    responseType: signage$displays_responses_pb.UpdateSignageDisplayResponse,
    requestSerialize: serialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayRequest,
    requestDeserialize: deserialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayRequest,
    responseSerialize: serialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayResponse,
    responseDeserialize: deserialize_turnly_channels_v1_signage_displays_UpdateSignageDisplayResponse,
  },
};

exports.SignageDisplaysClient = grpc.makeGenericClientConstructor(SignageDisplaysService);
