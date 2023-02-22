// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var fields_requests_pb = require('./fields.requests_pb.js');
var fields_responses_pb = require('./fields.responses_pb.js');

function serialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceRequest(arg) {
  if (!(arg instanceof fields_requests_pb.FindCustomerFieldsByServiceRequest)) {
    throw new Error('Expected argument of type turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceRequest(buffer_arg) {
  return fields_requests_pb.FindCustomerFieldsByServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceResponse(arg) {
  if (!(arg instanceof fields_responses_pb.FindCustomerFieldsByServiceResponse)) {
    throw new Error('Expected argument of type turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceResponse(buffer_arg) {
  return fields_responses_pb.FindCustomerFieldsByServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FieldsService = exports.FieldsService = {
  findCustomerFieldsByService: {
    path: '/turnly.business_data_fields.v1.fields.Fields/FindCustomerFieldsByService',
    requestStream: false,
    responseStream: false,
    requestType: fields_requests_pb.FindCustomerFieldsByServiceRequest,
    responseType: fields_responses_pb.FindCustomerFieldsByServiceResponse,
    requestSerialize: serialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceRequest,
    requestDeserialize: deserialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceRequest,
    responseSerialize: serialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceResponse,
    responseDeserialize: deserialize_turnly_business_data_fields_v1_fields_FindCustomerFieldsByServiceResponse,
  },
};

exports.FieldsClient = grpc.makeGenericClientConstructor(FieldsService);
