// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var access$tokens_requests_pb = require('./access-tokens.requests_pb.js');
var access$tokens_responses_pb = require('./access-tokens.responses_pb.js');

function serialize_turnly_business_management_v1_access_tokens_CreateAccessTokenRequest(arg) {
  if (!(arg instanceof access$tokens_requests_pb.CreateAccessTokenRequest)) {
    throw new Error('Expected argument of type turnly.business_management.v1.access_tokens.CreateAccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_access_tokens_CreateAccessTokenRequest(buffer_arg) {
  return access$tokens_requests_pb.CreateAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_access_tokens_CreateAccessTokenResponse(arg) {
  if (!(arg instanceof access$tokens_responses_pb.CreateAccessTokenResponse)) {
    throw new Error('Expected argument of type turnly.business_management.v1.access_tokens.CreateAccessTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_access_tokens_CreateAccessTokenResponse(buffer_arg) {
  return access$tokens_responses_pb.CreateAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenRequest(arg) {
  if (!(arg instanceof access$tokens_requests_pb.ExchangeAccessTokenRequest)) {
    throw new Error('Expected argument of type turnly.business_management.v1.access_tokens.ExchangeAccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenRequest(buffer_arg) {
  return access$tokens_requests_pb.ExchangeAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenResponse(arg) {
  if (!(arg instanceof access$tokens_responses_pb.ExchangeAccessTokenResponse)) {
    throw new Error('Expected argument of type turnly.business_management.v1.access_tokens.ExchangeAccessTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenResponse(buffer_arg) {
  return access$tokens_responses_pb.ExchangeAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_access_tokens_GetAccessTokenRequest(arg) {
  if (!(arg instanceof access$tokens_requests_pb.GetAccessTokenRequest)) {
    throw new Error('Expected argument of type turnly.business_management.v1.access_tokens.GetAccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_access_tokens_GetAccessTokenRequest(buffer_arg) {
  return access$tokens_requests_pb.GetAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_management_v1_access_tokens_GetAccessTokenResponse(arg) {
  if (!(arg instanceof access$tokens_responses_pb.GetAccessTokenResponse)) {
    throw new Error('Expected argument of type turnly.business_management.v1.access_tokens.GetAccessTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_management_v1_access_tokens_GetAccessTokenResponse(buffer_arg) {
  return access$tokens_responses_pb.GetAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccessTokensService = exports.AccessTokensService = {
  create: {
    path: '/turnly.business_management.v1.access_tokens.AccessTokens/Create',
    requestStream: false,
    responseStream: false,
    requestType: access$tokens_requests_pb.CreateAccessTokenRequest,
    responseType: access$tokens_responses_pb.CreateAccessTokenResponse,
    requestSerialize: serialize_turnly_business_management_v1_access_tokens_CreateAccessTokenRequest,
    requestDeserialize: deserialize_turnly_business_management_v1_access_tokens_CreateAccessTokenRequest,
    responseSerialize: serialize_turnly_business_management_v1_access_tokens_CreateAccessTokenResponse,
    responseDeserialize: deserialize_turnly_business_management_v1_access_tokens_CreateAccessTokenResponse,
  },
  exchange: {
    path: '/turnly.business_management.v1.access_tokens.AccessTokens/Exchange',
    requestStream: false,
    responseStream: false,
    requestType: access$tokens_requests_pb.ExchangeAccessTokenRequest,
    responseType: access$tokens_responses_pb.ExchangeAccessTokenResponse,
    requestSerialize: serialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenRequest,
    requestDeserialize: deserialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenRequest,
    responseSerialize: serialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenResponse,
    responseDeserialize: deserialize_turnly_business_management_v1_access_tokens_ExchangeAccessTokenResponse,
  },
  getOne: {
    path: '/turnly.business_management.v1.access_tokens.AccessTokens/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: access$tokens_requests_pb.GetAccessTokenRequest,
    responseType: access$tokens_responses_pb.GetAccessTokenResponse,
    requestSerialize: serialize_turnly_business_management_v1_access_tokens_GetAccessTokenRequest,
    requestDeserialize: deserialize_turnly_business_management_v1_access_tokens_GetAccessTokenRequest,
    responseSerialize: serialize_turnly_business_management_v1_access_tokens_GetAccessTokenResponse,
    responseDeserialize: deserialize_turnly_business_management_v1_access_tokens_GetAccessTokenResponse,
  },
};

exports.AccessTokensClient = grpc.makeGenericClientConstructor(AccessTokensService);
