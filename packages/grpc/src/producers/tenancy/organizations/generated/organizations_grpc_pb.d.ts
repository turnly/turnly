// package: turnly.tenancy.v1.organizations
// file: organizations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as organizations_pb from "./organizations_pb";
import * as organizations_requests_pb from "./organizations.requests_pb";
import * as organizations_responses_pb from "./organizations.responses_pb";

interface IOrganizationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listMyOrganizations: IOrganizationsService_IListMyOrganizations;
    getBySubdomain: IOrganizationsService_IGetBySubdomain;
}

interface IOrganizationsService_IListMyOrganizations extends grpc.MethodDefinition<organizations_requests_pb.ListMyOrganizationsRequest, organizations_responses_pb.ListMyOrganizationsResponse> {
    path: "/turnly.tenancy.v1.organizations.Organizations/ListMyOrganizations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organizations_requests_pb.ListMyOrganizationsRequest>;
    requestDeserialize: grpc.deserialize<organizations_requests_pb.ListMyOrganizationsRequest>;
    responseSerialize: grpc.serialize<organizations_responses_pb.ListMyOrganizationsResponse>;
    responseDeserialize: grpc.deserialize<organizations_responses_pb.ListMyOrganizationsResponse>;
}
interface IOrganizationsService_IGetBySubdomain extends grpc.MethodDefinition<organizations_requests_pb.GetOrganizationBySubdomainRequest, organizations_responses_pb.GetOrganizationBySubdomainResponse> {
    path: "/turnly.tenancy.v1.organizations.Organizations/GetBySubdomain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organizations_requests_pb.GetOrganizationBySubdomainRequest>;
    requestDeserialize: grpc.deserialize<organizations_requests_pb.GetOrganizationBySubdomainRequest>;
    responseSerialize: grpc.serialize<organizations_responses_pb.GetOrganizationBySubdomainResponse>;
    responseDeserialize: grpc.deserialize<organizations_responses_pb.GetOrganizationBySubdomainResponse>;
}

export const OrganizationsService: IOrganizationsService;

export interface IOrganizationsServer extends grpc.UntypedServiceImplementation {
    listMyOrganizations: grpc.handleUnaryCall<organizations_requests_pb.ListMyOrganizationsRequest, organizations_responses_pb.ListMyOrganizationsResponse>;
    getBySubdomain: grpc.handleUnaryCall<organizations_requests_pb.GetOrganizationBySubdomainRequest, organizations_responses_pb.GetOrganizationBySubdomainResponse>;
}

export interface IOrganizationsClient {
    listMyOrganizations(request: organizations_requests_pb.ListMyOrganizationsRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.ListMyOrganizationsResponse) => void): grpc.ClientUnaryCall;
    listMyOrganizations(request: organizations_requests_pb.ListMyOrganizationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.ListMyOrganizationsResponse) => void): grpc.ClientUnaryCall;
    listMyOrganizations(request: organizations_requests_pb.ListMyOrganizationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.ListMyOrganizationsResponse) => void): grpc.ClientUnaryCall;
    getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationBySubdomainResponse) => void): grpc.ClientUnaryCall;
    getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationBySubdomainResponse) => void): grpc.ClientUnaryCall;
    getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationBySubdomainResponse) => void): grpc.ClientUnaryCall;
}

export class OrganizationsClient extends grpc.Client implements IOrganizationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listMyOrganizations(request: organizations_requests_pb.ListMyOrganizationsRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.ListMyOrganizationsResponse) => void): grpc.ClientUnaryCall;
    public listMyOrganizations(request: organizations_requests_pb.ListMyOrganizationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.ListMyOrganizationsResponse) => void): grpc.ClientUnaryCall;
    public listMyOrganizations(request: organizations_requests_pb.ListMyOrganizationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.ListMyOrganizationsResponse) => void): grpc.ClientUnaryCall;
    public getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationBySubdomainResponse) => void): grpc.ClientUnaryCall;
    public getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationBySubdomainResponse) => void): grpc.ClientUnaryCall;
    public getBySubdomain(request: organizations_requests_pb.GetOrganizationBySubdomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organizations_responses_pb.GetOrganizationBySubdomainResponse) => void): grpc.ClientUnaryCall;
}
