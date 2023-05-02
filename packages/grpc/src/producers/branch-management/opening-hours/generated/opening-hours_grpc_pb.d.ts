// package: turnly.branch_management.v1.opening_hours
// file: opening-hours.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as opening_hours_pb from "./opening-hours_pb";
import * as opening_hours_requests_pb from "./opening-hours.requests_pb";
import * as opening_hours_responses_pb from "./opening-hours.responses_pb";

interface IOpeningHoursService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listLocationHours: IOpeningHoursService_IListLocationHours;
    create: IOpeningHoursService_ICreate;
}

interface IOpeningHoursService_IListLocationHours extends grpc.MethodDefinition<opening_hours_requests_pb.ListLocationHoursRequest, opening_hours_responses_pb.ListLocationHoursResponse> {
    path: "/turnly.branch_management.v1.opening_hours.OpeningHours/ListLocationHours";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opening_hours_requests_pb.ListLocationHoursRequest>;
    requestDeserialize: grpc.deserialize<opening_hours_requests_pb.ListLocationHoursRequest>;
    responseSerialize: grpc.serialize<opening_hours_responses_pb.ListLocationHoursResponse>;
    responseDeserialize: grpc.deserialize<opening_hours_responses_pb.ListLocationHoursResponse>;
}
interface IOpeningHoursService_ICreate extends grpc.MethodDefinition<opening_hours_requests_pb.CreateRequest, opening_hours_responses_pb.CreateResponse> {
    path: "/turnly.branch_management.v1.opening_hours.OpeningHours/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opening_hours_requests_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<opening_hours_requests_pb.CreateRequest>;
    responseSerialize: grpc.serialize<opening_hours_responses_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<opening_hours_responses_pb.CreateResponse>;
}

export const OpeningHoursService: IOpeningHoursService;

export interface IOpeningHoursServer extends grpc.UntypedServiceImplementation {
    listLocationHours: grpc.handleUnaryCall<opening_hours_requests_pb.ListLocationHoursRequest, opening_hours_responses_pb.ListLocationHoursResponse>;
    create: grpc.handleUnaryCall<opening_hours_requests_pb.CreateRequest, opening_hours_responses_pb.CreateResponse>;
}

export interface IOpeningHoursClient {
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    create(request: opening_hours_requests_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: opening_hours_requests_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: opening_hours_requests_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.CreateResponse) => void): grpc.ClientUnaryCall;
}

export class OpeningHoursClient extends grpc.Client implements IOpeningHoursClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public create(request: opening_hours_requests_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: opening_hours_requests_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: opening_hours_requests_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.CreateResponse) => void): grpc.ClientUnaryCall;
}
