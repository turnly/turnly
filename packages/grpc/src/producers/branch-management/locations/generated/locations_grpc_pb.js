// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var locations_requests_pb = require('./locations.requests_pb.js');
var locations_responses_pb = require('./locations.responses_pb.js');

function serialize_turnly_branch_management_v1_locations_GetLocationReadyForServingRequest(arg) {
  if (!(arg instanceof locations_requests_pb.GetLocationReadyForServingRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.locations.GetLocationReadyForServingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_locations_GetLocationReadyForServingRequest(buffer_arg) {
  return locations_requests_pb.GetLocationReadyForServingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_locations_GetLocationReadyForServingResponse(arg) {
  if (!(arg instanceof locations_responses_pb.GetLocationReadyForServingResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.locations.GetLocationReadyForServingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_locations_GetLocationReadyForServingResponse(buffer_arg) {
  return locations_responses_pb.GetLocationReadyForServingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_locations_GetLocationRequest(arg) {
  if (!(arg instanceof locations_requests_pb.GetLocationRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.locations.GetLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_locations_GetLocationRequest(buffer_arg) {
  return locations_requests_pb.GetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_locations_GetLocationResponse(arg) {
  if (!(arg instanceof locations_responses_pb.GetLocationResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.locations.GetLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_locations_GetLocationResponse(buffer_arg) {
  return locations_responses_pb.GetLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingRequest(arg) {
  if (!(arg instanceof locations_requests_pb.SearchAvailableLocationsForServingRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.locations.SearchAvailableLocationsForServingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingRequest(buffer_arg) {
  return locations_requests_pb.SearchAvailableLocationsForServingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingResponse(arg) {
  if (!(arg instanceof locations_responses_pb.SearchAvailableLocationsForServingResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.locations.SearchAvailableLocationsForServingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingResponse(buffer_arg) {
  return locations_responses_pb.SearchAvailableLocationsForServingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LocationsService = exports.LocationsService = {
  searchAvailableLocationsForServing: {
    path: '/turnly.branch_management.v1.locations.Locations/SearchAvailableLocationsForServing',
    requestStream: false,
    responseStream: false,
    requestType: locations_requests_pb.SearchAvailableLocationsForServingRequest,
    responseType: locations_responses_pb.SearchAvailableLocationsForServingResponse,
    requestSerialize: serialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingRequest,
    responseSerialize: serialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_locations_SearchAvailableLocationsForServingResponse,
  },
  getOne: {
    path: '/turnly.branch_management.v1.locations.Locations/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: locations_requests_pb.GetLocationRequest,
    responseType: locations_responses_pb.GetLocationResponse,
    requestSerialize: serialize_turnly_branch_management_v1_locations_GetLocationRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_locations_GetLocationRequest,
    responseSerialize: serialize_turnly_branch_management_v1_locations_GetLocationResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_locations_GetLocationResponse,
  },
  getReadyForServing: {
    path: '/turnly.branch_management.v1.locations.Locations/GetReadyForServing',
    requestStream: false,
    responseStream: false,
    requestType: locations_requests_pb.GetLocationReadyForServingRequest,
    responseType: locations_responses_pb.GetLocationReadyForServingResponse,
    requestSerialize: serialize_turnly_branch_management_v1_locations_GetLocationReadyForServingRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_locations_GetLocationReadyForServingRequest,
    responseSerialize: serialize_turnly_branch_management_v1_locations_GetLocationReadyForServingResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_locations_GetLocationReadyForServingResponse,
  },
};

exports.LocationsClient = grpc.makeGenericClientConstructor(LocationsService);
