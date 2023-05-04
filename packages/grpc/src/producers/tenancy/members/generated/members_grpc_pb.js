// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var members_requests_pb = require('./members.requests_pb.js');
var members_responses_pb = require('./members.responses_pb.js');

function serialize_turnly_tenancy_v1_members_GetMemberByUserIdRequest(arg) {
  if (!(arg instanceof members_requests_pb.GetMemberByUserIdRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.members.GetMemberByUserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_members_GetMemberByUserIdRequest(buffer_arg) {
  return members_requests_pb.GetMemberByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_members_GetMemberByUserIdResponse(arg) {
  if (!(arg instanceof members_responses_pb.GetMemberByUserIdResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.members.GetMemberByUserIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_members_GetMemberByUserIdResponse(buffer_arg) {
  return members_responses_pb.GetMemberByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_members_GetMemberRequest(arg) {
  if (!(arg instanceof members_requests_pb.GetMemberRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.members.GetMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_members_GetMemberRequest(buffer_arg) {
  return members_requests_pb.GetMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_members_GetMemberResponse(arg) {
  if (!(arg instanceof members_responses_pb.GetMemberResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.members.GetMemberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_members_GetMemberResponse(buffer_arg) {
  return members_responses_pb.GetMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MembersService = exports.MembersService = {
  getOne: {
    path: '/turnly.tenancy.v1.members.Members/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: members_requests_pb.GetMemberRequest,
    responseType: members_responses_pb.GetMemberResponse,
    requestSerialize: serialize_turnly_tenancy_v1_members_GetMemberRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_members_GetMemberRequest,
    responseSerialize: serialize_turnly_tenancy_v1_members_GetMemberResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_members_GetMemberResponse,
  },
  getByUserId: {
    path: '/turnly.tenancy.v1.members.Members/GetByUserId',
    requestStream: false,
    responseStream: false,
    requestType: members_requests_pb.GetMemberByUserIdRequest,
    responseType: members_responses_pb.GetMemberByUserIdResponse,
    requestSerialize: serialize_turnly_tenancy_v1_members_GetMemberByUserIdRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_members_GetMemberByUserIdRequest,
    responseSerialize: serialize_turnly_tenancy_v1_members_GetMemberByUserIdResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_members_GetMemberByUserIdResponse,
  },
};

exports.MembersClient = grpc.makeGenericClientConstructor(MembersService);
