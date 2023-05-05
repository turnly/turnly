// package: turnly.channels.v1.signage_displays
// file: signage-displays.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as signage_displays_pb from "./signage-displays_pb";
import * as signage_displays_requests_pb from "./signage-displays.requests_pb";
import * as signage_displays_responses_pb from "./signage-displays.responses_pb";

interface ISignageDisplaysService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generatePairingCode: ISignageDisplaysService_IGeneratePairingCode;
    pairToLocation: ISignageDisplaysService_IPairToLocation;
    unpair: ISignageDisplaysService_IUnpair;
    getOne: ISignageDisplaysService_IGetOne;
    list: ISignageDisplaysService_IList;
    update: ISignageDisplaysService_IUpdate;
}

interface ISignageDisplaysService_IGeneratePairingCode extends grpc.MethodDefinition<signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/GeneratePairingCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse>;
}
interface ISignageDisplaysService_IPairToLocation extends grpc.MethodDefinition<signage_displays_requests_pb.PairToLocationSignageDisplayRequest, signage_displays_responses_pb.PairToLocationSignageDisplayResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/PairToLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.PairToLocationSignageDisplayRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.PairToLocationSignageDisplayRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.PairToLocationSignageDisplayResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.PairToLocationSignageDisplayResponse>;
}
interface ISignageDisplaysService_IUnpair extends grpc.MethodDefinition<signage_displays_requests_pb.UnpairSignageDisplayRequest, signage_displays_responses_pb.UnpairSignageDisplayResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/Unpair";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.UnpairSignageDisplayRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.UnpairSignageDisplayRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.UnpairSignageDisplayResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.UnpairSignageDisplayResponse>;
}
interface ISignageDisplaysService_IGetOne extends grpc.MethodDefinition<signage_displays_requests_pb.GetOneSignageDisplayRequest, signage_displays_responses_pb.GetOneSignageDisplayResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.GetOneSignageDisplayRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.GetOneSignageDisplayRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.GetOneSignageDisplayResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.GetOneSignageDisplayResponse>;
}
interface ISignageDisplaysService_IList extends grpc.MethodDefinition<signage_displays_requests_pb.ListSignageDisplaysRequest, signage_displays_responses_pb.ListSignageDisplaysResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.ListSignageDisplaysRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.ListSignageDisplaysRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.ListSignageDisplaysResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.ListSignageDisplaysResponse>;
}
interface ISignageDisplaysService_IUpdate extends grpc.MethodDefinition<signage_displays_requests_pb.UpdateSignageDisplayRequest, signage_displays_responses_pb.UpdateSignageDisplayResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.UpdateSignageDisplayRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.UpdateSignageDisplayRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.UpdateSignageDisplayResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.UpdateSignageDisplayResponse>;
}

export const SignageDisplaysService: ISignageDisplaysService;

export interface ISignageDisplaysServer extends grpc.UntypedServiceImplementation {
    generatePairingCode: grpc.handleUnaryCall<signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse>;
    pairToLocation: grpc.handleUnaryCall<signage_displays_requests_pb.PairToLocationSignageDisplayRequest, signage_displays_responses_pb.PairToLocationSignageDisplayResponse>;
    unpair: grpc.handleUnaryCall<signage_displays_requests_pb.UnpairSignageDisplayRequest, signage_displays_responses_pb.UnpairSignageDisplayResponse>;
    getOne: grpc.handleUnaryCall<signage_displays_requests_pb.GetOneSignageDisplayRequest, signage_displays_responses_pb.GetOneSignageDisplayResponse>;
    list: grpc.handleUnaryCall<signage_displays_requests_pb.ListSignageDisplaysRequest, signage_displays_responses_pb.ListSignageDisplaysResponse>;
    update: grpc.handleUnaryCall<signage_displays_requests_pb.UpdateSignageDisplayRequest, signage_displays_responses_pb.UpdateSignageDisplayResponse>;
}

export interface ISignageDisplaysClient {
    generatePairingCode(request: signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    generatePairingCode(request: signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    generatePairingCode(request: signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    getOne(request: signage_displays_requests_pb.GetOneSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetOneSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    getOne(request: signage_displays_requests_pb.GetOneSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetOneSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    getOne(request: signage_displays_requests_pb.GetOneSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetOneSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    list(request: signage_displays_requests_pb.ListSignageDisplaysRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.ListSignageDisplaysResponse) => void): grpc.ClientUnaryCall;
    list(request: signage_displays_requests_pb.ListSignageDisplaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.ListSignageDisplaysResponse) => void): grpc.ClientUnaryCall;
    list(request: signage_displays_requests_pb.ListSignageDisplaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.ListSignageDisplaysResponse) => void): grpc.ClientUnaryCall;
    update(request: signage_displays_requests_pb.UpdateSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UpdateSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    update(request: signage_displays_requests_pb.UpdateSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UpdateSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    update(request: signage_displays_requests_pb.UpdateSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UpdateSignageDisplayResponse) => void): grpc.ClientUnaryCall;
}

export class SignageDisplaysClient extends grpc.Client implements ISignageDisplaysClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generatePairingCode(request: signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public generatePairingCode(request: signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public generatePairingCode(request: signage_displays_requests_pb.GeneratePairingCodeSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GeneratePairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: signage_displays_requests_pb.GetOneSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetOneSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: signage_displays_requests_pb.GetOneSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetOneSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: signage_displays_requests_pb.GetOneSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetOneSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public list(request: signage_displays_requests_pb.ListSignageDisplaysRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.ListSignageDisplaysResponse) => void): grpc.ClientUnaryCall;
    public list(request: signage_displays_requests_pb.ListSignageDisplaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.ListSignageDisplaysResponse) => void): grpc.ClientUnaryCall;
    public list(request: signage_displays_requests_pb.ListSignageDisplaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.ListSignageDisplaysResponse) => void): grpc.ClientUnaryCall;
    public update(request: signage_displays_requests_pb.UpdateSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UpdateSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public update(request: signage_displays_requests_pb.UpdateSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UpdateSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public update(request: signage_displays_requests_pb.UpdateSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UpdateSignageDisplayResponse) => void): grpc.ClientUnaryCall;
}
