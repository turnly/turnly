// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var customers_requests_pb = require('./customers.requests_pb.js');
var customers_responses_pb = require('./customers.responses_pb.js');

function serialize_turnly_queuing_system_v1_customers_CreateCustomerRequest(arg) {
  if (!(arg instanceof customers_requests_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.customers.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_customers_CreateCustomerRequest(buffer_arg) {
  return customers_requests_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_customers_CreateCustomerResponse(arg) {
  if (!(arg instanceof customers_responses_pb.CreateCustomerResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.customers.CreateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_customers_CreateCustomerResponse(buffer_arg) {
  return customers_responses_pb.CreateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_customers_GetCustomerRequest(arg) {
  if (!(arg instanceof customers_requests_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.customers.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_customers_GetCustomerRequest(buffer_arg) {
  return customers_requests_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_customers_GetCustomerResponse(arg) {
  if (!(arg instanceof customers_responses_pb.GetCustomerResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.customers.GetCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_customers_GetCustomerResponse(buffer_arg) {
  return customers_responses_pb.GetCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomersService = exports.CustomersService = {
  create: {
    path: '/turnly.queuing_system.v1.customers.Customers/Create',
    requestStream: false,
    responseStream: false,
    requestType: customers_requests_pb.CreateCustomerRequest,
    responseType: customers_responses_pb.CreateCustomerResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_customers_CreateCustomerRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_customers_CreateCustomerRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_customers_CreateCustomerResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_customers_CreateCustomerResponse,
  },
  getOne: {
    path: '/turnly.queuing_system.v1.customers.Customers/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: customers_requests_pb.GetCustomerRequest,
    responseType: customers_responses_pb.GetCustomerResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_customers_GetCustomerRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_customers_GetCustomerRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_customers_GetCustomerResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_customers_GetCustomerResponse,
  },
};

exports.CustomersClient = grpc.makeGenericClientConstructor(CustomersService);
