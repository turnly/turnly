// package: turnly.tenancy.v1.features
// file: features.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as features_pb from "./features_pb";
import * as features_requests_pb from "./features.requests_pb";
import * as features_responses_pb from "./features.responses_pb";

interface IFeaturesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    bulk: IFeaturesService_IBulk;
    delete: IFeaturesService_IDelete;
    list: IFeaturesService_IList;
}

interface IFeaturesService_IBulk extends grpc.MethodDefinition<features_requests_pb.BulkFeaturesRequest, features_responses_pb.BulkFeaturesResponse> {
    path: "/turnly.tenancy.v1.features.Features/Bulk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<features_requests_pb.BulkFeaturesRequest>;
    requestDeserialize: grpc.deserialize<features_requests_pb.BulkFeaturesRequest>;
    responseSerialize: grpc.serialize<features_responses_pb.BulkFeaturesResponse>;
    responseDeserialize: grpc.deserialize<features_responses_pb.BulkFeaturesResponse>;
}
interface IFeaturesService_IDelete extends grpc.MethodDefinition<features_requests_pb.DeleteFeatureRequest, features_responses_pb.DeleteFeatureResponse> {
    path: "/turnly.tenancy.v1.features.Features/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<features_requests_pb.DeleteFeatureRequest>;
    requestDeserialize: grpc.deserialize<features_requests_pb.DeleteFeatureRequest>;
    responseSerialize: grpc.serialize<features_responses_pb.DeleteFeatureResponse>;
    responseDeserialize: grpc.deserialize<features_responses_pb.DeleteFeatureResponse>;
}
interface IFeaturesService_IList extends grpc.MethodDefinition<features_requests_pb.ListFeaturesRequest, features_responses_pb.ListFeaturesResponse> {
    path: "/turnly.tenancy.v1.features.Features/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<features_requests_pb.ListFeaturesRequest>;
    requestDeserialize: grpc.deserialize<features_requests_pb.ListFeaturesRequest>;
    responseSerialize: grpc.serialize<features_responses_pb.ListFeaturesResponse>;
    responseDeserialize: grpc.deserialize<features_responses_pb.ListFeaturesResponse>;
}

export const FeaturesService: IFeaturesService;

export interface IFeaturesServer extends grpc.UntypedServiceImplementation {
    bulk: grpc.handleUnaryCall<features_requests_pb.BulkFeaturesRequest, features_responses_pb.BulkFeaturesResponse>;
    delete: grpc.handleUnaryCall<features_requests_pb.DeleteFeatureRequest, features_responses_pb.DeleteFeatureResponse>;
    list: grpc.handleUnaryCall<features_requests_pb.ListFeaturesRequest, features_responses_pb.ListFeaturesResponse>;
}

export interface IFeaturesClient {
    bulk(request: features_requests_pb.BulkFeaturesRequest, callback: (error: grpc.ServiceError | null, response: features_responses_pb.BulkFeaturesResponse) => void): grpc.ClientUnaryCall;
    bulk(request: features_requests_pb.BulkFeaturesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: features_responses_pb.BulkFeaturesResponse) => void): grpc.ClientUnaryCall;
    bulk(request: features_requests_pb.BulkFeaturesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: features_responses_pb.BulkFeaturesResponse) => void): grpc.ClientUnaryCall;
    delete(request: features_requests_pb.DeleteFeatureRequest, callback: (error: grpc.ServiceError | null, response: features_responses_pb.DeleteFeatureResponse) => void): grpc.ClientUnaryCall;
    delete(request: features_requests_pb.DeleteFeatureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: features_responses_pb.DeleteFeatureResponse) => void): grpc.ClientUnaryCall;
    delete(request: features_requests_pb.DeleteFeatureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: features_responses_pb.DeleteFeatureResponse) => void): grpc.ClientUnaryCall;
    list(request: features_requests_pb.ListFeaturesRequest, callback: (error: grpc.ServiceError | null, response: features_responses_pb.ListFeaturesResponse) => void): grpc.ClientUnaryCall;
    list(request: features_requests_pb.ListFeaturesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: features_responses_pb.ListFeaturesResponse) => void): grpc.ClientUnaryCall;
    list(request: features_requests_pb.ListFeaturesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: features_responses_pb.ListFeaturesResponse) => void): grpc.ClientUnaryCall;
}

export class FeaturesClient extends grpc.Client implements IFeaturesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public bulk(request: features_requests_pb.BulkFeaturesRequest, callback: (error: grpc.ServiceError | null, response: features_responses_pb.BulkFeaturesResponse) => void): grpc.ClientUnaryCall;
    public bulk(request: features_requests_pb.BulkFeaturesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: features_responses_pb.BulkFeaturesResponse) => void): grpc.ClientUnaryCall;
    public bulk(request: features_requests_pb.BulkFeaturesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: features_responses_pb.BulkFeaturesResponse) => void): grpc.ClientUnaryCall;
    public delete(request: features_requests_pb.DeleteFeatureRequest, callback: (error: grpc.ServiceError | null, response: features_responses_pb.DeleteFeatureResponse) => void): grpc.ClientUnaryCall;
    public delete(request: features_requests_pb.DeleteFeatureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: features_responses_pb.DeleteFeatureResponse) => void): grpc.ClientUnaryCall;
    public delete(request: features_requests_pb.DeleteFeatureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: features_responses_pb.DeleteFeatureResponse) => void): grpc.ClientUnaryCall;
    public list(request: features_requests_pb.ListFeaturesRequest, callback: (error: grpc.ServiceError | null, response: features_responses_pb.ListFeaturesResponse) => void): grpc.ClientUnaryCall;
    public list(request: features_requests_pb.ListFeaturesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: features_responses_pb.ListFeaturesResponse) => void): grpc.ClientUnaryCall;
    public list(request: features_requests_pb.ListFeaturesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: features_responses_pb.ListFeaturesResponse) => void): grpc.ClientUnaryCall;
}
