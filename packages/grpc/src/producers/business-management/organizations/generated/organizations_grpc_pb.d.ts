// package: turnly.business_owners.v1.organizations
// file: organizations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as organizations_pb from "./organizations_pb";
import * as organizations_requests_pb from "./organizations.requests_pb";
import * as organizations_responses_pb from "./organizations.responses_pb";

interface IOrganizationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IOrganizationsService_IGetOne;
    getBySubdomain: IOrganizationsService_IGetBySubdomain;
}

interface IOrganizationsService_IGetOne extends grpc.MethodDefinition<organizations_requests_pb.GetOrganizationRequest, organizations_responses_pb.GetOrganizationResponse> {
    path: "/turnly.business_owners.v1.organizations.Organizations/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organizations_requests_pb.GetOrganizationRequest>;
    requestDeserialize: grpc.deserialize<organizations_requests_pb.GetOrganizationRequest>;
    responseSerialize: grpc.serialize<organizations_responses_pb.GetOrganizationResponse>;
    responseDeserialize: grpc.deserialize<organizations_responses_pb.GetOrganizationResponse>;
}
interface IOrganizationsService_IGetBySubdomain extends grpc.MethodDefinition<organizations_requests_pb.GetOrganizationBySubdomainRequest, organizations_responses_pb.GetOrganizationResponse> {
    path: "/turnly.business_owners.v1.organizations.Organizations/GetBySubdomain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organizations_requests_pb.GetOrganizationBySubdomainRequest>;
    requestDeserialize: grpc.deserialize<organizations_requests_pb.GetOrganizationBySubdomainRequest>;
    responseSerialize: grpc.serialize<organizations_responses_pb.GetOrganizationResponse>;
    responseDeserialize: grpc.deserialize<organizations_responses_pb.GetOrganizationResponse>;
}

export const OrganizationsService: IOrganizationsService;

export interface IOrganizationsServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<organizations_requests_pb.GetOrganizationRequest, organizations_responses_pb.GetOrganizationResponse>;
    getBySubdomain: grpc.handleUnaryCall<organizations_requests_pb.GetOrganizationBySubdomainRequest, organizations_responses_pb.GetOrganizationResponse>;
}

export interface IOrganizationsClient {
    getOne(request: organizations_requests_pb.GetOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getOne(request: organizations_requests_pb.GetOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getOne(request: organizations_requests_pb.GetOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
}

export class OrganizationsClient extends grpc.Client implements IOrganizationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: organizations_requests_pb.GetOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: organizations_requests_pb.GetOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: organizations_requests_pb.GetOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
}
