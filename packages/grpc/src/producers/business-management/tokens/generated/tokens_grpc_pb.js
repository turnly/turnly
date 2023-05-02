// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tokens_requests_pb = require('./tokens.requests_pb.js');
var tokens_responses_pb = require('./tokens.responses_pb.js');

function serialize_turnly_business_management_v1_tokens_CreateTokenRequest(arg) {
  if (!(arg instanceof tokens_requests_pb.CreateTokenRequest)) {
    throw new Error('Expected argument of type turnly.business_management.v1.tokens.CreateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_tokens_CreateTokenRequest(buffer_arg) {
  return tokens_requests_pb.CreateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_tokens_CreateTokenResponse(arg) {
  if (!(arg instanceof tokens_responses_pb.CreateTokenResponse)) {
    throw new Error('Expected argument of type turnly.business_management.v1.tokens.CreateTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_tokens_CreateTokenResponse(buffer_arg) {
  return tokens_responses_pb.CreateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_tokens_ExchangeTokenRequest(arg) {
  if (!(arg instanceof tokens_requests_pb.ExchangeTokenRequest)) {
    throw new Error('Expected argument of type turnly.business_management.v1.tokens.ExchangeTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_tokens_ExchangeTokenRequest(buffer_arg) {
  return tokens_requests_pb.ExchangeTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_tokens_ExchangeTokenResponse(arg) {
  if (!(arg instanceof tokens_responses_pb.ExchangeTokenResponse)) {
    throw new Error('Expected argument of type turnly.business_management.v1.tokens.ExchangeTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_tokens_ExchangeTokenResponse(buffer_arg) {
  return tokens_responses_pb.ExchangeTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_tokens_GetTokenRequest(arg) {
  if (!(arg instanceof tokens_requests_pb.GetTokenRequest)) {
    throw new Error('Expected argument of type turnly.business_management.v1.tokens.GetTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_tokens_GetTokenRequest(buffer_arg) {
  return tokens_requests_pb.GetTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_tokens_GetTokenResponse(arg) {
  if (!(arg instanceof tokens_responses_pb.GetTokenResponse)) {
    throw new Error('Expected argument of type turnly.business_management.v1.tokens.GetTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_tokens_GetTokenResponse(buffer_arg) {
  return tokens_responses_pb.GetTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TokensService = exports.TokensService = {
  create: {
    path: '/turnly.business_management.v1.tokens.Tokens/Create',
    requestStream: false,
    responseStream: false,
    requestType: tokens_requests_pb.CreateTokenRequest,
    responseType: tokens_responses_pb.CreateTokenResponse,
    requestSerialize: serialize_turnly_business_management_v1_tokens_CreateTokenRequest,
    requestDeserialize: deserialize_turnly_business_management_v1_tokens_CreateTokenRequest,
    responseSerialize: serialize_turnly_business_management_v1_tokens_CreateTokenResponse,
    responseDeserialize: deserialize_turnly_business_management_v1_tokens_CreateTokenResponse,
  },
  exchange: {
    path: '/turnly.business_management.v1.tokens.Tokens/Exchange',
    requestStream: false,
    responseStream: false,
    requestType: tokens_requests_pb.ExchangeTokenRequest,
    responseType: tokens_responses_pb.ExchangeTokenResponse,
    requestSerialize: serialize_turnly_business_management_v1_tokens_ExchangeTokenRequest,
    requestDeserialize: deserialize_turnly_business_management_v1_tokens_ExchangeTokenRequest,
    responseSerialize: serialize_turnly_business_management_v1_tokens_ExchangeTokenResponse,
    responseDeserialize: deserialize_turnly_business_management_v1_tokens_ExchangeTokenResponse,
  },
  getOne: {
    path: '/turnly.business_management.v1.tokens.Tokens/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: tokens_requests_pb.GetTokenRequest,
    responseType: tokens_responses_pb.GetTokenResponse,
    requestSerialize: serialize_turnly_business_management_v1_tokens_GetTokenRequest,
    requestDeserialize: deserialize_turnly_business_management_v1_tokens_GetTokenRequest,
    responseSerialize: serialize_turnly_business_management_v1_tokens_GetTokenResponse,
    responseDeserialize: deserialize_turnly_business_management_v1_tokens_GetTokenResponse,
  },
};

exports.TokensClient = grpc.makeGenericClientConstructor(TokensService);
