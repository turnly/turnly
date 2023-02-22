// package: turnly.queuing_system.v1.customers
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as customers_pb from "./customers_pb";
import * as customers_requests_pb from "./customers.requests_pb";
import * as customers_responses_pb from "./customers.responses_pb";

interface ICustomersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ICustomersService_ICreate;
    getOne: ICustomersService_IGetOne;
}

interface ICustomersService_ICreate extends grpc.MethodDefinition<customers_requests_pb.CreateCustomerRequest, customers_responses_pb.CreateCustomerResponse> {
    path: "/turnly.queuing_system.v1.customers.Customers/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_requests_pb.CreateCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_requests_pb.CreateCustomerRequest>;
    responseSerialize: grpc.serialize<customers_responses_pb.CreateCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_responses_pb.CreateCustomerResponse>;
}
interface ICustomersService_IGetOne extends grpc.MethodDefinition<customers_requests_pb.GetCustomerRequest, customers_responses_pb.GetCustomerResponse> {
    path: "/turnly.queuing_system.v1.customers.Customers/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_requests_pb.GetCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_requests_pb.GetCustomerRequest>;
    responseSerialize: grpc.serialize<customers_responses_pb.GetCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_responses_pb.GetCustomerResponse>;
}

export const CustomersService: ICustomersService;

export interface ICustomersServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<customers_requests_pb.CreateCustomerRequest, customers_responses_pb.CreateCustomerResponse>;
    getOne: grpc.handleUnaryCall<customers_requests_pb.GetCustomerRequest, customers_responses_pb.GetCustomerResponse>;
}

export interface ICustomersClient {
    create(request: customers_requests_pb.CreateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    create(request: customers_requests_pb.CreateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    create(request: customers_requests_pb.CreateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    getOne(request: customers_requests_pb.GetCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    getOne(request: customers_requests_pb.GetCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    getOne(request: customers_requests_pb.GetCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
}

export class CustomersClient extends grpc.Client implements ICustomersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: customers_requests_pb.CreateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    public create(request: customers_requests_pb.CreateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    public create(request: customers_requests_pb.CreateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: customers_requests_pb.GetCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: customers_requests_pb.GetCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: customers_requests_pb.GetCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_responses_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
}
