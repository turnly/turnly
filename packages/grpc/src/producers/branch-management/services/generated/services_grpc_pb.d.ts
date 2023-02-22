// package: turnly.branch_management.v1.services
// file: services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_pb from "./services_pb";
import * as services_requests_pb from "./services.requests_pb";
import * as services_responses_pb from "./services.responses_pb";

interface IServicesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IServicesService_IGetOne;
    listServicesOfOneLocation: IServicesService_IListServicesOfOneLocation;
}

interface IServicesService_IGetOne extends grpc.MethodDefinition<services_requests_pb.GetServiceRequest, services_responses_pb.GetServiceResponse> {
    path: "/turnly.branch_management.v1.services.Services/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_requests_pb.GetServiceRequest>;
    requestDeserialize: grpc.deserialize<services_requests_pb.GetServiceRequest>;
    responseSerialize: grpc.serialize<services_responses_pb.GetServiceResponse>;
    responseDeserialize: grpc.deserialize<services_responses_pb.GetServiceResponse>;
}
interface IServicesService_IListServicesOfOneLocation extends grpc.MethodDefinition<services_requests_pb.ListServicesOfOneLocationRequest, services_responses_pb.ListServicesOfOneLocationResponse> {
    path: "/turnly.branch_management.v1.services.Services/ListServicesOfOneLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_requests_pb.ListServicesOfOneLocationRequest>;
    requestDeserialize: grpc.deserialize<services_requests_pb.ListServicesOfOneLocationRequest>;
    responseSerialize: grpc.serialize<services_responses_pb.ListServicesOfOneLocationResponse>;
    responseDeserialize: grpc.deserialize<services_responses_pb.ListServicesOfOneLocationResponse>;
}

export const ServicesService: IServicesService;

export interface IServicesServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<services_requests_pb.GetServiceRequest, services_responses_pb.GetServiceResponse>;
    listServicesOfOneLocation: grpc.handleUnaryCall<services_requests_pb.ListServicesOfOneLocationRequest, services_responses_pb.ListServicesOfOneLocationResponse>;
}

export interface IServicesClient {
    getOne(request: services_requests_pb.GetServiceRequest, callback: (error: grpc.ServiceError | null, response: services_responses_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    getOne(request: services_requests_pb.GetServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_responses_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    getOne(request: services_requests_pb.GetServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_responses_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    listServicesOfOneLocation(request: services_requests_pb.ListServicesOfOneLocationRequest, callback: (error: grpc.ServiceError | null, response: services_responses_pb.ListServicesOfOneLocationResponse) => void): grpc.ClientUnaryCall;
    listServicesOfOneLocation(request: services_requests_pb.ListServicesOfOneLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_responses_pb.ListServicesOfOneLocationResponse) => void): grpc.ClientUnaryCall;
    listServicesOfOneLocation(request: services_requests_pb.ListServicesOfOneLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_responses_pb.ListServicesOfOneLocationResponse) => void): grpc.ClientUnaryCall;
}

export class ServicesClient extends grpc.Client implements IServicesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: services_requests_pb.GetServiceRequest, callback: (error: grpc.ServiceError | null, response: services_responses_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: services_requests_pb.GetServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_responses_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: services_requests_pb.GetServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_responses_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    public listServicesOfOneLocation(request: services_requests_pb.ListServicesOfOneLocationRequest, callback: (error: grpc.ServiceError | null, response: services_responses_pb.ListServicesOfOneLocationResponse) => void): grpc.ClientUnaryCall;
    public listServicesOfOneLocation(request: services_requests_pb.ListServicesOfOneLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_responses_pb.ListServicesOfOneLocationResponse) => void): grpc.ClientUnaryCall;
    public listServicesOfOneLocation(request: services_requests_pb.ListServicesOfOneLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_responses_pb.ListServicesOfOneLocationResponse) => void): grpc.ClientUnaryCall;
}
