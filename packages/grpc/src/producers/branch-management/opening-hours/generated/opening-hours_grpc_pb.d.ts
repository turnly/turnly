// package: turnly.branch_management.v1.opening_hours
// file: opening-hours.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as opening_hours_pb from "./opening-hours_pb";
import * as opening_hours_requests_pb from "./opening-hours.requests_pb";
import * as opening_hours_responses_pb from "./opening-hours.responses_pb";

interface IOpeningHoursService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    save: IOpeningHoursService_ISave;
    listLocationHours: IOpeningHoursService_IListLocationHours;
}

interface IOpeningHoursService_ISave extends grpc.MethodDefinition<opening_hours_requests_pb.SaveOpeningHoursRequest, opening_hours_responses_pb.SaveOpeningHoursResponse> {
    path: "/turnly.branch_management.v1.opening_hours.OpeningHours/Save";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opening_hours_requests_pb.SaveOpeningHoursRequest>;
    requestDeserialize: grpc.deserialize<opening_hours_requests_pb.SaveOpeningHoursRequest>;
    responseSerialize: grpc.serialize<opening_hours_responses_pb.SaveOpeningHoursResponse>;
    responseDeserialize: grpc.deserialize<opening_hours_responses_pb.SaveOpeningHoursResponse>;
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

export const OpeningHoursService: IOpeningHoursService;

export interface IOpeningHoursServer extends grpc.UntypedServiceImplementation {
    save: grpc.handleUnaryCall<opening_hours_requests_pb.SaveOpeningHoursRequest, opening_hours_responses_pb.SaveOpeningHoursResponse>;
    listLocationHours: grpc.handleUnaryCall<opening_hours_requests_pb.ListLocationHoursRequest, opening_hours_responses_pb.ListLocationHoursResponse>;
}

export interface IOpeningHoursClient {
    save(request: opening_hours_requests_pb.SaveOpeningHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.SaveOpeningHoursResponse) => void): grpc.ClientUnaryCall;
    save(request: opening_hours_requests_pb.SaveOpeningHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.SaveOpeningHoursResponse) => void): grpc.ClientUnaryCall;
    save(request: opening_hours_requests_pb.SaveOpeningHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.SaveOpeningHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
}

export class OpeningHoursClient extends grpc.Client implements IOpeningHoursClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public save(request: opening_hours_requests_pb.SaveOpeningHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.SaveOpeningHoursResponse) => void): grpc.ClientUnaryCall;
    public save(request: opening_hours_requests_pb.SaveOpeningHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.SaveOpeningHoursResponse) => void): grpc.ClientUnaryCall;
    public save(request: opening_hours_requests_pb.SaveOpeningHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.SaveOpeningHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
    public listLocationHours(request: opening_hours_requests_pb.ListLocationHoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opening_hours_responses_pb.ListLocationHoursResponse) => void): grpc.ClientUnaryCall;
}
