// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var features_requests_pb = require('./features.requests_pb.js');
var features_responses_pb = require('./features.responses_pb.js');

function serialize_turnly_tenancy_v1_features_BulkFeaturesRequest(arg) {
  if (!(arg instanceof features_requests_pb.BulkFeaturesRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.features.BulkFeaturesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_features_BulkFeaturesRequest(buffer_arg) {
  return features_requests_pb.BulkFeaturesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_features_BulkFeaturesResponse(arg) {
  if (!(arg instanceof features_responses_pb.BulkFeaturesResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.features.BulkFeaturesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_features_BulkFeaturesResponse(buffer_arg) {
  return features_responses_pb.BulkFeaturesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_features_DeleteFeatureRequest(arg) {
  if (!(arg instanceof features_requests_pb.DeleteFeatureRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.features.DeleteFeatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_features_DeleteFeatureRequest(buffer_arg) {
  return features_requests_pb.DeleteFeatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_features_DeleteFeatureResponse(arg) {
  if (!(arg instanceof features_responses_pb.DeleteFeatureResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.features.DeleteFeatureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_features_DeleteFeatureResponse(buffer_arg) {
  return features_responses_pb.DeleteFeatureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_features_ListFeaturesRequest(arg) {
  if (!(arg instanceof features_requests_pb.ListFeaturesRequest)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.features.ListFeaturesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_features_ListFeaturesRequest(buffer_arg) {
  return features_requests_pb.ListFeaturesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_tenancy_v1_features_ListFeaturesResponse(arg) {
  if (!(arg instanceof features_responses_pb.ListFeaturesResponse)) {
    throw new Error('Expected argument of type turnly.tenancy.v1.features.ListFeaturesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_tenancy_v1_features_ListFeaturesResponse(buffer_arg) {
  return features_responses_pb.ListFeaturesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeaturesService = exports.FeaturesService = {
  // *
// Insert a list of features into your tenancy and return the list of features.
bulk: {
    path: '/turnly.tenancy.v1.features.Features/Bulk',
    requestStream: false,
    responseStream: false,
    requestType: features_requests_pb.BulkFeaturesRequest,
    responseType: features_responses_pb.BulkFeaturesResponse,
    requestSerialize: serialize_turnly_tenancy_v1_features_BulkFeaturesRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_features_BulkFeaturesRequest,
    responseSerialize: serialize_turnly_tenancy_v1_features_BulkFeaturesResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_features_BulkFeaturesResponse,
  },
  // *
// Delete a feature from your tenancy by its ID.
delete: {
    path: '/turnly.tenancy.v1.features.Features/Delete',
    requestStream: false,
    responseStream: false,
    requestType: features_requests_pb.DeleteFeatureRequest,
    responseType: features_responses_pb.DeleteFeatureResponse,
    requestSerialize: serialize_turnly_tenancy_v1_features_DeleteFeatureRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_features_DeleteFeatureRequest,
    responseSerialize: serialize_turnly_tenancy_v1_features_DeleteFeatureResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_features_DeleteFeatureResponse,
  },
  // *
// Get the features in your tenancy.
list: {
    path: '/turnly.tenancy.v1.features.Features/List',
    requestStream: false,
    responseStream: false,
    requestType: features_requests_pb.ListFeaturesRequest,
    responseType: features_responses_pb.ListFeaturesResponse,
    requestSerialize: serialize_turnly_tenancy_v1_features_ListFeaturesRequest,
    requestDeserialize: deserialize_turnly_tenancy_v1_features_ListFeaturesRequest,
    responseSerialize: serialize_turnly_tenancy_v1_features_ListFeaturesResponse,
    responseDeserialize: deserialize_turnly_tenancy_v1_features_ListFeaturesResponse,
  },
};

exports.FeaturesClient = grpc.makeGenericClientConstructor(FeaturesService);
