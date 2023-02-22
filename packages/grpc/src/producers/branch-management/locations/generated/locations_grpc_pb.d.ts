// package: turnly.branch_management.v1.locations
// file: locations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as locations_pb from "./locations_pb";
import * as locations_requests_pb from "./locations.requests_pb";
import * as locations_responses_pb from "./locations.responses_pb";

interface ILocationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchAvailableLocationsForServing: ILocationsService_ISearchAvailableLocationsForServing;
    getOne: ILocationsService_IGetOne;
}

interface ILocationsService_ISearchAvailableLocationsForServing extends grpc.MethodDefinition<locations_requests_pb.SearchAvailableLocationsForServingRequest, locations_responses_pb.SearchAvailableLocationsForServingResponse> {
    path: "/turnly.branch_management.v1.locations.Locations/SearchAvailableLocationsForServing";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<locations_requests_pb.SearchAvailableLocationsForServingRequest>;
    requestDeserialize: grpc.deserialize<locations_requests_pb.SearchAvailableLocationsForServingRequest>;
    responseSerialize: grpc.serialize<locations_responses_pb.SearchAvailableLocationsForServingResponse>;
    responseDeserialize: grpc.deserialize<locations_responses_pb.SearchAvailableLocationsForServingResponse>;
}
interface ILocationsService_IGetOne extends grpc.MethodDefinition<locations_requests_pb.GetLocationRequest, locations_responses_pb.GetLocationResponse> {
    path: "/turnly.branch_management.v1.locations.Locations/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<locations_requests_pb.GetLocationRequest>;
    requestDeserialize: grpc.deserialize<locations_requests_pb.GetLocationRequest>;
    responseSerialize: grpc.serialize<locations_responses_pb.GetLocationResponse>;
    responseDeserialize: grpc.deserialize<locations_responses_pb.GetLocationResponse>;
}

export const LocationsService: ILocationsService;

export interface ILocationsServer extends grpc.UntypedServiceImplementation {
    searchAvailableLocationsForServing: grpc.handleUnaryCall<locations_requests_pb.SearchAvailableLocationsForServingRequest, locations_responses_pb.SearchAvailableLocationsForServingResponse>;
    getOne: grpc.handleUnaryCall<locations_requests_pb.GetLocationRequest, locations_responses_pb.GetLocationResponse>;
}

export interface ILocationsClient {
    searchAvailableLocationsForServing(request: locations_requests_pb.SearchAvailableLocationsForServingRequest, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.SearchAvailableLocationsForServingResponse) => void): grpc.ClientUnaryCall;
    searchAvailableLocationsForServing(request: locations_requests_pb.SearchAvailableLocationsForServingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.SearchAvailableLocationsForServingResponse) => void): grpc.ClientUnaryCall;
    searchAvailableLocationsForServing(request: locations_requests_pb.SearchAvailableLocationsForServingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.SearchAvailableLocationsForServingResponse) => void): grpc.ClientUnaryCall;
    getOne(request: locations_requests_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getOne(request: locations_requests_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getOne(request: locations_requests_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
}

export class LocationsClient extends grpc.Client implements ILocationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchAvailableLocationsForServing(request: locations_requests_pb.SearchAvailableLocationsForServingRequest, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.SearchAvailableLocationsForServingResponse) => void): grpc.ClientUnaryCall;
    public searchAvailableLocationsForServing(request: locations_requests_pb.SearchAvailableLocationsForServingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.SearchAvailableLocationsForServingResponse) => void): grpc.ClientUnaryCall;
    public searchAvailableLocationsForServing(request: locations_requests_pb.SearchAvailableLocationsForServingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.SearchAvailableLocationsForServingResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: locations_requests_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: locations_requests_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: locations_requests_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: locations_responses_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
}
