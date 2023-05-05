// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var devices_requests_pb = require('./devices.requests_pb.js');
var devices_responses_pb = require('./devices.responses_pb.js');

function serialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceRequest(arg) {
  if (!(arg instanceof devices_requests_pb.GeneratePairingCodeDeviceRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.GeneratePairingCodeDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceRequest(buffer_arg) {
  return devices_requests_pb.GeneratePairingCodeDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceResponse(arg) {
  if (!(arg instanceof devices_responses_pb.GeneratePairingCodeDeviceResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.GeneratePairingCodeDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceResponse(buffer_arg) {
  return devices_responses_pb.GeneratePairingCodeDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_GetOneDeviceRequest(arg) {
  if (!(arg instanceof devices_requests_pb.GetOneDeviceRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.GetOneDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_GetOneDeviceRequest(buffer_arg) {
  return devices_requests_pb.GetOneDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_GetOneDeviceResponse(arg) {
  if (!(arg instanceof devices_responses_pb.GetOneDeviceResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.GetOneDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_GetOneDeviceResponse(buffer_arg) {
  return devices_responses_pb.GetOneDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_ListDevicesRequest(arg) {
  if (!(arg instanceof devices_requests_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.ListDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_ListDevicesRequest(buffer_arg) {
  return devices_requests_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_ListDevicesResponse(arg) {
  if (!(arg instanceof devices_responses_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.ListDevicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_ListDevicesResponse(buffer_arg) {
  return devices_responses_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_PairToLocationDeviceRequest(arg) {
  if (!(arg instanceof devices_requests_pb.PairToLocationDeviceRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.PairToLocationDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_PairToLocationDeviceRequest(buffer_arg) {
  return devices_requests_pb.PairToLocationDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_PairToLocationDeviceResponse(arg) {
  if (!(arg instanceof devices_responses_pb.PairToLocationDeviceResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.PairToLocationDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_PairToLocationDeviceResponse(buffer_arg) {
  return devices_responses_pb.PairToLocationDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_UnpairDeviceRequest(arg) {
  if (!(arg instanceof devices_requests_pb.UnpairDeviceRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.UnpairDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_UnpairDeviceRequest(buffer_arg) {
  return devices_requests_pb.UnpairDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_devices_UnpairDeviceResponse(arg) {
  if (!(arg instanceof devices_responses_pb.UnpairDeviceResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.devices.UnpairDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_devices_UnpairDeviceResponse(buffer_arg) {
  return devices_responses_pb.UnpairDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DevicesService = exports.DevicesService = {
  generatePairingCode: {
    path: '/turnly.channels.v1.devices.Devices/GeneratePairingCode',
    requestStream: false,
    responseStream: false,
    requestType: devices_requests_pb.GeneratePairingCodeDeviceRequest,
    responseType: devices_responses_pb.GeneratePairingCodeDeviceResponse,
    requestSerialize: serialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceRequest,
    requestDeserialize: deserialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceRequest,
    responseSerialize: serialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceResponse,
    responseDeserialize: deserialize_turnly_channels_v1_devices_GeneratePairingCodeDeviceResponse,
  },
  pairToLocation: {
    path: '/turnly.channels.v1.devices.Devices/PairToLocation',
    requestStream: false,
    responseStream: false,
    requestType: devices_requests_pb.PairToLocationDeviceRequest,
    responseType: devices_responses_pb.PairToLocationDeviceResponse,
    requestSerialize: serialize_turnly_channels_v1_devices_PairToLocationDeviceRequest,
    requestDeserialize: deserialize_turnly_channels_v1_devices_PairToLocationDeviceRequest,
    responseSerialize: serialize_turnly_channels_v1_devices_PairToLocationDeviceResponse,
    responseDeserialize: deserialize_turnly_channels_v1_devices_PairToLocationDeviceResponse,
  },
  unpair: {
    path: '/turnly.channels.v1.devices.Devices/Unpair',
    requestStream: false,
    responseStream: false,
    requestType: devices_requests_pb.UnpairDeviceRequest,
    responseType: devices_responses_pb.UnpairDeviceResponse,
    requestSerialize: serialize_turnly_channels_v1_devices_UnpairDeviceRequest,
    requestDeserialize: deserialize_turnly_channels_v1_devices_UnpairDeviceRequest,
    responseSerialize: serialize_turnly_channels_v1_devices_UnpairDeviceResponse,
    responseDeserialize: deserialize_turnly_channels_v1_devices_UnpairDeviceResponse,
  },
  getOne: {
    path: '/turnly.channels.v1.devices.Devices/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: devices_requests_pb.GetOneDeviceRequest,
    responseType: devices_responses_pb.GetOneDeviceResponse,
    requestSerialize: serialize_turnly_channels_v1_devices_GetOneDeviceRequest,
    requestDeserialize: deserialize_turnly_channels_v1_devices_GetOneDeviceRequest,
    responseSerialize: serialize_turnly_channels_v1_devices_GetOneDeviceResponse,
    responseDeserialize: deserialize_turnly_channels_v1_devices_GetOneDeviceResponse,
  },
  list: {
    path: '/turnly.channels.v1.devices.Devices/List',
    requestStream: false,
    responseStream: false,
    requestType: devices_requests_pb.ListDevicesRequest,
    responseType: devices_responses_pb.ListDevicesResponse,
    requestSerialize: serialize_turnly_channels_v1_devices_ListDevicesRequest,
    requestDeserialize: deserialize_turnly_channels_v1_devices_ListDevicesRequest,
    responseSerialize: serialize_turnly_channels_v1_devices_ListDevicesResponse,
    responseDeserialize: deserialize_turnly_channels_v1_devices_ListDevicesResponse,
  },
};

exports.DevicesClient = grpc.makeGenericClientConstructor(DevicesService);
