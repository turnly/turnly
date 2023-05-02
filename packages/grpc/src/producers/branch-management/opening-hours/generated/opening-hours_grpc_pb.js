// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var opening$hours_requests_pb = require('./opening-hours.requests_pb.js');
var opening$hours_responses_pb = require('./opening-hours.responses_pb.js');

function serialize_turnly_branch_management_v1_opening_hours_CreateRequest(arg) {
  if (!(arg instanceof opening$hours_requests_pb.CreateRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.opening_hours.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_opening_hours_CreateRequest(buffer_arg) {
  return opening$hours_requests_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_opening_hours_CreateResponse(arg) {
  if (!(arg instanceof opening$hours_responses_pb.CreateResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.opening_hours.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_opening_hours_CreateResponse(buffer_arg) {
  return opening$hours_responses_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_opening_hours_ListLocationHoursRequest(arg) {
  if (!(arg instanceof opening$hours_requests_pb.ListLocationHoursRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.opening_hours.ListLocationHoursRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_opening_hours_ListLocationHoursRequest(buffer_arg) {
  return opening$hours_requests_pb.ListLocationHoursRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_opening_hours_ListLocationHoursResponse(arg) {
  if (!(arg instanceof opening$hours_responses_pb.ListLocationHoursResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.opening_hours.ListLocationHoursResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_opening_hours_ListLocationHoursResponse(buffer_arg) {
  return opening$hours_responses_pb.ListLocationHoursResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OpeningHoursService = exports.OpeningHoursService = {
  listLocationHours: {
    path: '/turnly.branch_management.v1.opening_hours.OpeningHours/ListLocationHours',
    requestStream: false,
    responseStream: false,
    requestType: opening$hours_requests_pb.ListLocationHoursRequest,
    responseType: opening$hours_responses_pb.ListLocationHoursResponse,
    requestSerialize: serialize_turnly_branch_management_v1_opening_hours_ListLocationHoursRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_opening_hours_ListLocationHoursRequest,
    responseSerialize: serialize_turnly_branch_management_v1_opening_hours_ListLocationHoursResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_opening_hours_ListLocationHoursResponse,
  },
  create: {
    path: '/turnly.branch_management.v1.opening_hours.OpeningHours/Create',
    requestStream: false,
    responseStream: false,
    requestType: opening$hours_requests_pb.CreateRequest,
    responseType: opening$hours_responses_pb.CreateResponse,
    requestSerialize: serialize_turnly_branch_management_v1_opening_hours_CreateRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_opening_hours_CreateRequest,
    responseSerialize: serialize_turnly_branch_management_v1_opening_hours_CreateResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_opening_hours_CreateResponse,
  },
};

exports.OpeningHoursClient = grpc.makeGenericClientConstructor(OpeningHoursService);
