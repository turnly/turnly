// package: turnly.channels.v1.digital_signage
// file: digital-signage.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as digital_signage_pb from "./digital-signage_pb";
import * as digital_signage_requests_pb from "./digital-signage.requests_pb";
import * as digital_signage_responses_pb from "./digital-signage.responses_pb";

interface IDigitalSignageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPairingCode: IDigitalSignageService_IGetPairingCode;
    pairToLocation: IDigitalSignageService_IPairToLocation;
}

interface IDigitalSignageService_IGetPairingCode extends grpc.MethodDefinition<digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse> {
    path: "/turnly.channels.v1.digital_signage.DigitalSignage/GetPairingCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest>;
    requestDeserialize: grpc.deserialize<digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest>;
    responseSerialize: grpc.serialize<digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse>;
    responseDeserialize: grpc.deserialize<digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse>;
}
interface IDigitalSignageService_IPairToLocation extends grpc.MethodDefinition<digital_signage_requests_pb.PairToLocationDigitalSignageRequest, digital_signage_responses_pb.PairToLocationDigitalSignageResponse> {
    path: "/turnly.channels.v1.digital_signage.DigitalSignage/PairToLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<digital_signage_requests_pb.PairToLocationDigitalSignageRequest>;
    requestDeserialize: grpc.deserialize<digital_signage_requests_pb.PairToLocationDigitalSignageRequest>;
    responseSerialize: grpc.serialize<digital_signage_responses_pb.PairToLocationDigitalSignageResponse>;
    responseDeserialize: grpc.deserialize<digital_signage_responses_pb.PairToLocationDigitalSignageResponse>;
}

export const DigitalSignageService: IDigitalSignageService;

export interface IDigitalSignageServer extends grpc.UntypedServiceImplementation {
    getPairingCode: grpc.handleUnaryCall<digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse>;
    pairToLocation: grpc.handleUnaryCall<digital_signage_requests_pb.PairToLocationDigitalSignageRequest, digital_signage_responses_pb.PairToLocationDigitalSignageResponse>;
}

export interface IDigitalSignageClient {
    getPairingCode(request: digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    getPairingCode(request: digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    getPairingCode(request: digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: digital_signage_requests_pb.PairToLocationDigitalSignageRequest, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.PairToLocationDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: digital_signage_requests_pb.PairToLocationDigitalSignageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.PairToLocationDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: digital_signage_requests_pb.PairToLocationDigitalSignageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.PairToLocationDigitalSignageResponse) => void): grpc.ClientUnaryCall;
}

export class DigitalSignageClient extends grpc.Client implements IDigitalSignageClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPairingCode(request: digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    public getPairingCode(request: digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    public getPairingCode(request: digital_signage_requests_pb.GetPairingCodeDigitalSignageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.GetPairingCodeDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: digital_signage_requests_pb.PairToLocationDigitalSignageRequest, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.PairToLocationDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: digital_signage_requests_pb.PairToLocationDigitalSignageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.PairToLocationDigitalSignageResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: digital_signage_requests_pb.PairToLocationDigitalSignageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: digital_signage_responses_pb.PairToLocationDigitalSignageResponse) => void): grpc.ClientUnaryCall;
}
