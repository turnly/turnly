// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var organizations_requests_pb = require('./organizations.requests_pb.js');
var organizations_responses_pb = require('./organizations.responses_pb.js');

function serialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainRequest(arg) {
  if (!(arg instanceof organizations_requests_pb.GetOrganizationBySubdomainRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.organizations.GetOrganizationBySubdomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainRequest(buffer_arg) {
  return organizations_requests_pb.GetOrganizationBySubdomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainResponse(arg) {
  if (!(arg instanceof organizations_responses_pb.GetOrganizationBySubdomainResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainResponse(buffer_arg) {
  return organizations_responses_pb.GetOrganizationBySubdomainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_organizations_ListMyOrganizationsRequest(arg) {
  if (!(arg instanceof organizations_requests_pb.ListMyOrganizationsRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.organizations.ListMyOrganizationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_organizations_ListMyOrganizationsRequest(buffer_arg) {
  return organizations_requests_pb.ListMyOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_organizations_ListMyOrganizationsResponse(arg) {
  if (!(arg instanceof organizations_responses_pb.ListMyOrganizationsResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.organizations.ListMyOrganizationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_organizations_ListMyOrganizationsResponse(buffer_arg) {
  return organizations_responses_pb.ListMyOrganizationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrganizationsService = exports.OrganizationsService = {
  // *
// Lists all organizations that the user is a member of.
listMyOrganizations: {
    path: '/turnly.tenancy.v1.organizations.Organizations/ListMyOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: organizations_requests_pb.ListMyOrganizationsRequest,
    responseType: organizations_responses_pb.ListMyOrganizationsResponse,
    requestSerialize: serialize_turnly_tenancy_v1_organizations_ListMyOrganizationsRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_organizations_ListMyOrganizationsRequest,
    responseSerialize: serialize_turnly_tenancy_v1_organizations_ListMyOrganizationsResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_organizations_ListMyOrganizationsResponse,
  },
  // *
// Gets an organization by public subdomain.
// e.g. https://<subdomain>.turnly.app
getBySubdomain: {
    path: '/turnly.tenancy.v1.organizations.Organizations/GetBySubdomain',
    requestStream: false,
    responseStream: false,
    requestType: organizations_requests_pb.GetOrganizationBySubdomainRequest,
    responseType: organizations_responses_pb.GetOrganizationBySubdomainResponse,
    requestSerialize: serialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainRequest,
    responseSerialize: serialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_organizations_GetOrganizationBySubdomainResponse,
  },
};

exports.OrganizationsClient = grpc.makeGenericClientConstructor(OrganizationsService);
