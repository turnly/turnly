// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_requests_pb = require('./services.requests_pb.js');
var services_responses_pb = require('./services.responses_pb.js');

function serialize_turnly_branch_management_v1_services_GetServiceRequest(arg) {
  if (!(arg instanceof services_requests_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.services.GetServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_services_GetServiceRequest(buffer_arg) {
  return services_requests_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_services_GetServiceResponse(arg) {
  if (!(arg instanceof services_responses_pb.GetServiceResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.services.GetServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_services_GetServiceResponse(buffer_arg) {
  return services_responses_pb.GetServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_services_ListServicesOfOneLocationRequest(arg) {
  if (!(arg instanceof services_requests_pb.ListServicesOfOneLocationRequest)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.services.ListServicesOfOneLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_services_ListServicesOfOneLocationRequest(buffer_arg) {
  return services_requests_pb.ListServicesOfOneLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_branch_management_v1_services_ListServicesOfOneLocationResponse(arg) {
  if (!(arg instanceof services_responses_pb.ListServicesOfOneLocationResponse)) {
    throw new Error('Expected argument of type turnly.branch_management.v1.services.ListServicesOfOneLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_branch_management_v1_services_ListServicesOfOneLocationResponse(buffer_arg) {
  return services_responses_pb.ListServicesOfOneLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServicesService = exports.ServicesService = {
  getOne: {
    path: '/turnly.branch_management.v1.services.Services/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: services_requests_pb.GetServiceRequest,
    responseType: services_responses_pb.GetServiceResponse,
    requestSerialize: serialize_turnly_branch_management_v1_services_GetServiceRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_services_GetServiceRequest,
    responseSerialize: serialize_turnly_branch_management_v1_services_GetServiceResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_services_GetServiceResponse,
  },
  listServicesOfOneLocation: {
    path: '/turnly.branch_management.v1.services.Services/ListServicesOfOneLocation',
    requestStream: false,
    responseStream: false,
    requestType: services_requests_pb.ListServicesOfOneLocationRequest,
    responseType: services_responses_pb.ListServicesOfOneLocationResponse,
    requestSerialize: serialize_turnly_branch_management_v1_services_ListServicesOfOneLocationRequest,
    requestDeserialize: deserialize_turnly_branch_management_v1_services_ListServicesOfOneLocationRequest,
    responseSerialize: serialize_turnly_branch_management_v1_services_ListServicesOfOneLocationResponse,
    responseDeserialize: deserialize_turnly_branch_management_v1_services_ListServicesOfOneLocationResponse,
  },
};

exports.ServicesClient = grpc.makeGenericClientConstructor(ServicesService);
