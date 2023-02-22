// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var answers_requests_pb = require('./answers.requests_pb.js');
var answers_responses_pb = require('./answers.responses_pb.js');

function serialize_turnly_business_data_fields_v1_answers_CreateAnswersRequest(arg) {
  if (!(arg instanceof answers_requests_pb.CreateAnswersRequest)) {
    throw new Error('Expected argument of type turnly.business_data_fields.v1.answers.CreateAnswersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_data_fields_v1_answers_CreateAnswersRequest(buffer_arg) {
  return answers_requests_pb.CreateAnswersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_data_fields_v1_answers_CreateAnswersResponse(arg) {
  if (!(arg instanceof answers_responses_pb.CreateAnswersResponse)) {
    throw new Error('Expected argument of type turnly.business_data_fields.v1.answers.CreateAnswersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_data_fields_v1_answers_CreateAnswersResponse(buffer_arg) {
  return answers_responses_pb.CreateAnswersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldRequest(arg) {
  if (!(arg instanceof answers_requests_pb.ListAnswersByFieldRequest)) {
    throw new Error('Expected argument of type turnly.business_data_fields.v1.answers.ListAnswersByFieldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldRequest(buffer_arg) {
  return answers_requests_pb.ListAnswersByFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldResponse(arg) {
  if (!(arg instanceof answers_responses_pb.ListAnswersByFieldResponse)) {
    throw new Error('Expected argument of type turnly.business_data_fields.v1.answers.ListAnswersByFieldResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldResponse(buffer_arg) {
  return answers_responses_pb.ListAnswersByFieldResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnswersService = exports.AnswersService = {
  create: {
    path: '/turnly.business_data_fields.v1.answers.Answers/Create',
    requestStream: false,
    responseStream: false,
    requestType: answers_requests_pb.CreateAnswersRequest,
    responseType: answers_responses_pb.CreateAnswersResponse,
    requestSerialize: serialize_turnly_business_data_fields_v1_answers_CreateAnswersRequest,
    requestDeserialize: deserialize_turnly_business_data_fields_v1_answers_CreateAnswersRequest,
    responseSerialize: serialize_turnly_business_data_fields_v1_answers_CreateAnswersResponse,
    responseDeserialize: deserialize_turnly_business_data_fields_v1_answers_CreateAnswersResponse,
  },
  listByField: {
    path: '/turnly.business_data_fields.v1.answers.Answers/ListByField',
    requestStream: false,
    responseStream: false,
    requestType: answers_requests_pb.ListAnswersByFieldRequest,
    responseType: answers_responses_pb.ListAnswersByFieldResponse,
    requestSerialize: serialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldRequest,
    requestDeserialize: deserialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldRequest,
    responseSerialize: serialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldResponse,
    responseDeserialize: deserialize_turnly_business_data_fields_v1_answers_ListAnswersByFieldResponse,
  },
};

exports.AnswersClient = grpc.makeGenericClientConstructor(AnswersService);
