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
    bulk: IOpeningHoursService_IBulk;
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
interface IOpeningHoursService_IBulk extends grpc.MethodDefinition<opening_hours_requests_pb.BulkRequest, opening_hours_responses_pb.BulkResponse> {
    path: "/turnly.branch_management.v1.opening_hours.OpeningHours/Bulk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opening_hours_requests_pb.BulkRequest>;
    requestDeserialize: grpc.deserialize<opening_hours_requests_pb.BulkRequest>;
    responseSerialize: grpc.serialize<opening_hours_responses_pb.BulkResponse>;
    responseDeserialize: grpc.deserialize<opening_hours_responses_pb.BulkResponse>;
}

export const OpeningHoursService: IOpeningHoursService;

export interface IOpeningHoursServer extends grpc.UntypedServiceImplementation {
    listLocationHours: grpc.handleUnaryCall<opening_hours_requests_pb.ListLocationHoursRequest, opening_hours_responses_pb.ListLocationHoursResponse>;
    bulk: grpc.handleUnaryCall<opening_hours_requests_pb.BulkRequest, opening_hours_responses_pb.BulkResponse>;
}

export interface IOpeningHoursClient {
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    bulk(request: opening_hours_requests_pb.BulkRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.BulkResponse) => void): grpc.ClientUnaryCall;
    bulk(request: opening_hours_requests_pb.BulkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.BulkResponse) => void): grpc.ClientUnaryCall;
    bulk(request: opening_hours_requests_pb.BulkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.BulkResponse) => void): grpc.ClientUnaryCall;
}

export class OpeningHoursClient extends grpc.Client implements IOpeningHoursClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public bulk(request: opening_hours_requests_pb.BulkRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.BulkResponse) => void): grpc.ClientUnaryCall;
    public bulk(request: opening_hours_requests_pb.BulkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.BulkResponse) => void): grpc.ClientUnaryCall;
    public bulk(request: opening_hours_requests_pb.BulkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.BulkResponse) => void): grpc.ClientUnaryCall;
}
