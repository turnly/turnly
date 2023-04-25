// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var organizations_requests_pb = require('./organizations.requests_pb.js');
var organizations_responses_pb = require('./organizations.responses_pb.js');

function serialize_turnly_business_owners_v1_organizations_GetOrganizationBySubdomainRequest(arg) {
  if (!(arg instanceof organizations_requests_pb.GetOrganizationBySubdomainRequest)) {
    throw new Error('Expected argument of type turnly.business_owners.v1.organizations.GetOrganizationBySubdomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_owners_v1_organizations_GetOrganizationBySubdomainRequest(buffer_arg) {
  return organizations_requests_pb.GetOrganizationBySubdomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_owners_v1_organizations_GetOrganizationRequest(arg) {
  if (!(arg instanceof organizations_requests_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type turnly.business_owners.v1.organizations.GetOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_owners_v1_organizations_GetOrganizationRequest(buffer_arg) {
  return organizations_requests_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_business_owners_v1_organizations_GetOrganizationResponse(arg) {
  if (!(arg instanceof organizations_responses_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type turnly.business_owners.v1.organizations.GetOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_business_owners_v1_organizations_GetOrganizationResponse(buffer_arg) {
  return organizations_responses_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrganizationsService = exports.OrganizationsService = {
  getOne: {
    path: '/turnly.business_owners.v1.organizations.Organizations/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: organizations_requests_pb.GetOrganizationRequest,
    responseType: organizations_responses_pb.GetOrganizationResponse,
    requestSerialize: serialize_turnly_business_owners_v1_organizations_GetOrganizationRequest,
    requestDeserialize: deserialize_turnly_business_owners_v1_organizations_GetOrganizationRequest,
    responseSerialize: serialize_turnly_business_owners_v1_organizations_GetOrganizationResponse,
    responseDeserialize: deserialize_turnly_business_owners_v1_organizations_GetOrganizationResponse,
  },
  getBySubdomain: {
    path: '/turnly.business_owners.v1.organizations.Organizations/GetBySubdomain',
    requestStream: false,
    responseStream: false,
    requestType: organizations_requests_pb.GetOrganizationBySubdomainRequest,
    responseType: organizations_responses_pb.GetOrganizationResponse,
    requestSerialize: serialize_turnly_business_owners_v1_organizations_GetOrganizationBySubdomainRequest,
    requestDeserialize: deserialize_turnly_business_owners_v1_organizations_GetOrganizationBySubdomainRequest,
    responseSerialize: serialize_turnly_business_owners_v1_organizations_GetOrganizationResponse,
    responseDeserialize: deserialize_turnly_business_owners_v1_organizations_GetOrganizationResponse,
  },
};

exports.OrganizationsClient = grpc.makeGenericClientConstructor(OrganizationsService);
