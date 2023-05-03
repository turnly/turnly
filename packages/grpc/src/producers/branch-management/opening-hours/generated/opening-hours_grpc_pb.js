// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var opening$hours_requests_pb = require('./opening-hours.requests_pb.js');
var opening$hours_responses_pb = require('./opening-hours.responses_pb.js');

function serialize_turnly_branch_management_v1_opening_hours_BulkRequest(arg) {
  if (!(arg instanceof opening$hours_requests_pb.BulkRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.opening_hours.BulkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_opening_hours_BulkRequest(buffer_arg) {
  return opening$hours_requests_pb.BulkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_opening_hours_BulkResponse(arg) {
  if (!(arg instanceof opening$hours_responses_pb.BulkResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.opening_hours.BulkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_opening_hours_BulkResponse(buffer_arg) {
  return opening$hours_responses_pb.BulkResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  bulk: {
    path: '/turnly.branch_management.v1.opening_hours.OpeningHours/Bulk',
    requestStream: false,
    responseStream: false,
    requestType: opening$hours_requests_pb.BulkRequest,
    responseType: opening$hours_responses_pb.BulkResponse,
    requestSerialize: serialize_turnly_branch_management_v1_opening_hours_BulkRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_opening_hours_BulkRequest,
    responseSerialize: serialize_turnly_branch_management_v1_opening_hours_BulkResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_opening_hours_BulkResponse,
  },
};

exports.OpeningHoursClient = grpc.makeGenericClientConstructor(OpeningHoursService);
