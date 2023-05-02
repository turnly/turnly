// package: turnly.channels.v1.signage_displays
// file: signage-displays.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as signage_displays_pb from "./signage-displays_pb";
import * as signage_displays_requests_pb from "./signage-displays.requests_pb";
import * as signage_displays_responses_pb from "./signage-displays.responses_pb";

interface ISignageDisplaysService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPairingCode: ISignageDisplaysService_IGetPairingCode;
    pairToLocation: ISignageDisplaysService_IPairToLocation;
    unpair: ISignageDisplaysService_IUnpair;
}

interface ISignageDisplaysService_IGetPairingCode extends grpc.MethodDefinition<signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse> {
    path: "/turnly.channels.v1.signage_displays.SignageDisplays/GetPairingCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest>;
    requestDeserialize: grpc.deserialize<signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest>;
    responseSerialize: grpc.serialize<signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse>;
    responseDeserialize: grpc.deserialize<signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse>;
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

export const SignageDisplaysService: ISignageDisplaysService;

export interface ISignageDisplaysServer extends grpc.UntypedServiceImplementation {
    getPairingCode: grpc.handleUnaryCall<signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse>;
    pairToLocation: grpc.handleUnaryCall<signage_displays_requests_pb.PairToLocationSignageDisplayRequest, signage_displays_responses_pb.PairToLocationSignageDisplayResponse>;
    unpair: grpc.handleUnaryCall<signage_displays_requests_pb.UnpairSignageDisplayRequest, signage_displays_responses_pb.UnpairSignageDisplayResponse>;
}

export interface ISignageDisplaysClient {
    getPairingCode(request: signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    getPairingCode(request: signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    getPairingCode(request: signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
}

export class SignageDisplaysClient extends grpc.Client implements ISignageDisplaysClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPairingCode(request: signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public getPairingCode(request: signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public getPairingCode(request: signage_displays_requests_pb.GetPairingCodeSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.GetPairingCodeSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: signage_displays_requests_pb.PairToLocationSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.PairToLocationSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: signage_displays_requests_pb.UnpairSignageDisplayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: signage_displays_responses_pb.UnpairSignageDisplayResponse) => void): grpc.ClientUnaryCall;
}
