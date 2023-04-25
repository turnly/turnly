// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var agents_requests_pb = require('./agents.requests_pb.js');
var agents_responses_pb = require('./agents.responses_pb.js');

function serialize_turnly_teams_v1_agents_GetAgentByUserIdRequest(arg) {
  if (!(arg instanceof agents_requests_pb.GetAgentByUserIdRequest)) {
    throw new Error('Expected argument of type turnly.teams.v1.agents.GetAgentByUserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_teams_v1_agents_GetAgentByUserIdRequest(buffer_arg) {
  return agents_requests_pb.GetAgentByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_teams_v1_agents_GetAgentByUserIdResponse(arg) {
  if (!(arg instanceof agents_responses_pb.GetAgentByUserIdResponse)) {
    throw new Error('Expected argument of type turnly.teams.v1.agents.GetAgentByUserIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_teams_v1_agents_GetAgentByUserIdResponse(buffer_arg) {
  return agents_responses_pb.GetAgentByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_teams_v1_agents_GetAgentRequest(arg) {
  if (!(arg instanceof agents_requests_pb.GetAgentRequest)) {
    throw new Error('Expected argument of type turnly.teams.v1.agents.GetAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_teams_v1_agents_GetAgentRequest(buffer_arg) {
  return agents_requests_pb.GetAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_teams_v1_agents_GetAgentResponse(arg) {
  if (!(arg instanceof agents_responses_pb.GetAgentResponse)) {
    throw new Error('Expected argument of type turnly.teams.v1.agents.GetAgentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_teams_v1_agents_GetAgentResponse(buffer_arg) {
  return agents_responses_pb.GetAgentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AgentsService = exports.AgentsService = {
  getOne: {
    path: '/turnly.teams.v1.agents.Agents/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: agents_requests_pb.GetAgentRequest,
    responseType: agents_responses_pb.GetAgentResponse,
    requestSerialize: serialize_turnly_teams_v1_agents_GetAgentRequest,
    requestDeserialize: deserialize_turnly_teams_v1_agents_GetAgentRequest,
    responseSerialize: serialize_turnly_teams_v1_agents_GetAgentResponse,
    responseDeserialize: deserialize_turnly_teams_v1_agents_GetAgentResponse,
  },
  getByUserId: {
    path: '/turnly.teams.v1.agents.Agents/GetByUserId',
    requestStream: false,
    responseStream: false,
    requestType: agents_requests_pb.GetAgentByUserIdRequest,
    responseType: agents_responses_pb.GetAgentByUserIdResponse,
    requestSerialize: serialize_turnly_teams_v1_agents_GetAgentByUserIdRequest,
    requestDeserialize: deserialize_turnly_teams_v1_agents_GetAgentByUserIdRequest,
    responseSerialize: serialize_turnly_teams_v1_agents_GetAgentByUserIdResponse,
    responseDeserialize: deserialize_turnly_teams_v1_agents_GetAgentByUserIdResponse,
  },
};

exports.AgentsClient = grpc.makeGenericClientConstructor(AgentsService);
