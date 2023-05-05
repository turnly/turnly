// package: turnly.channels.v1.devices
// file: devices.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as devices_pb from "./devices_pb";
import * as devices_requests_pb from "./devices.requests_pb";
import * as devices_responses_pb from "./devices.responses_pb";

interface IDevicesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generatePairingCode: IDevicesService_IGeneratePairingCode;
    pairToLocation: IDevicesService_IPairToLocation;
    unpair: IDevicesService_IUnpair;
    getOne: IDevicesService_IGetOne;
    list: IDevicesService_IList;
}

interface IDevicesService_IGeneratePairingCode extends grpc.MethodDefinition<devices_requests_pb.GeneratePairingCodeDeviceRequest, devices_responses_pb.GeneratePairingCodeDeviceResponse> {
    path: "/turnly.channels.v1.devices.Devices/GeneratePairingCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<devices_requests_pb.GeneratePairingCodeDeviceRequest>;
    requestDeserialize: grpc.deserialize<devices_requests_pb.GeneratePairingCodeDeviceRequest>;
    responseSerialize: grpc.serialize<devices_responses_pb.GeneratePairingCodeDeviceResponse>;
    responseDeserialize: grpc.deserialize<devices_responses_pb.GeneratePairingCodeDeviceResponse>;
}
interface IDevicesService_IPairToLocation extends grpc.MethodDefinition<devices_requests_pb.PairToLocationDeviceRequest, devices_responses_pb.PairToLocationDeviceResponse> {
    path: "/turnly.channels.v1.devices.Devices/PairToLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<devices_requests_pb.PairToLocationDeviceRequest>;
    requestDeserialize: grpc.deserialize<devices_requests_pb.PairToLocationDeviceRequest>;
    responseSerialize: grpc.serialize<devices_responses_pb.PairToLocationDeviceResponse>;
    responseDeserialize: grpc.deserialize<devices_responses_pb.PairToLocationDeviceResponse>;
}
interface IDevicesService_IUnpair extends grpc.MethodDefinition<devices_requests_pb.UnpairDeviceRequest, devices_responses_pb.UnpairDeviceResponse> {
    path: "/turnly.channels.v1.devices.Devices/Unpair";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<devices_requests_pb.UnpairDeviceRequest>;
    requestDeserialize: grpc.deserialize<devices_requests_pb.UnpairDeviceRequest>;
    responseSerialize: grpc.serialize<devices_responses_pb.UnpairDeviceResponse>;
    responseDeserialize: grpc.deserialize<devices_responses_pb.UnpairDeviceResponse>;
}
interface IDevicesService_IGetOne extends grpc.MethodDefinition<devices_requests_pb.GetOneDeviceRequest, devices_responses_pb.GetOneDeviceResponse> {
    path: "/turnly.channels.v1.devices.Devices/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<devices_requests_pb.GetOneDeviceRequest>;
    requestDeserialize: grpc.deserialize<devices_requests_pb.GetOneDeviceRequest>;
    responseSerialize: grpc.serialize<devices_responses_pb.GetOneDeviceResponse>;
    responseDeserialize: grpc.deserialize<devices_responses_pb.GetOneDeviceResponse>;
}
interface IDevicesService_IList extends grpc.MethodDefinition<devices_requests_pb.ListDevicesRequest, devices_responses_pb.ListDevicesResponse> {
    path: "/turnly.channels.v1.devices.Devices/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<devices_requests_pb.ListDevicesRequest>;
    requestDeserialize: grpc.deserialize<devices_requests_pb.ListDevicesRequest>;
    responseSerialize: grpc.serialize<devices_responses_pb.ListDevicesResponse>;
    responseDeserialize: grpc.deserialize<devices_responses_pb.ListDevicesResponse>;
}

export const DevicesService: IDevicesService;

export interface IDevicesServer extends grpc.UntypedServiceImplementation {
    generatePairingCode: grpc.handleUnaryCall<devices_requests_pb.GeneratePairingCodeDeviceRequest, devices_responses_pb.GeneratePairingCodeDeviceResponse>;
    pairToLocation: grpc.handleUnaryCall<devices_requests_pb.PairToLocationDeviceRequest, devices_responses_pb.PairToLocationDeviceResponse>;
    unpair: grpc.handleUnaryCall<devices_requests_pb.UnpairDeviceRequest, devices_responses_pb.UnpairDeviceResponse>;
    getOne: grpc.handleUnaryCall<devices_requests_pb.GetOneDeviceRequest, devices_responses_pb.GetOneDeviceResponse>;
    list: grpc.handleUnaryCall<devices_requests_pb.ListDevicesRequest, devices_responses_pb.ListDevicesResponse>;
}

export interface IDevicesClient {
    generatePairingCode(request: devices_requests_pb.GeneratePairingCodeDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GeneratePairingCodeDeviceResponse) => void): grpc.ClientUnaryCall;
    generatePairingCode(request: devices_requests_pb.GeneratePairingCodeDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GeneratePairingCodeDeviceResponse) => void): grpc.ClientUnaryCall;
    generatePairingCode(request: devices_requests_pb.GeneratePairingCodeDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GeneratePairingCodeDeviceResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: devices_requests_pb.PairToLocationDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.PairToLocationDeviceResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: devices_requests_pb.PairToLocationDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.PairToLocationDeviceResponse) => void): grpc.ClientUnaryCall;
    pairToLocation(request: devices_requests_pb.PairToLocationDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.PairToLocationDeviceResponse) => void): grpc.ClientUnaryCall;
    unpair(request: devices_requests_pb.UnpairDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.UnpairDeviceResponse) => void): grpc.ClientUnaryCall;
    unpair(request: devices_requests_pb.UnpairDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.UnpairDeviceResponse) => void): grpc.ClientUnaryCall;
    unpair(request: devices_requests_pb.UnpairDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.UnpairDeviceResponse) => void): grpc.ClientUnaryCall;
    getOne(request: devices_requests_pb.GetOneDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GetOneDeviceResponse) => void): grpc.ClientUnaryCall;
    getOne(request: devices_requests_pb.GetOneDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GetOneDeviceResponse) => void): grpc.ClientUnaryCall;
    getOne(request: devices_requests_pb.GetOneDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GetOneDeviceResponse) => void): grpc.ClientUnaryCall;
    list(request: devices_requests_pb.ListDevicesRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    list(request: devices_requests_pb.ListDevicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    list(request: devices_requests_pb.ListDevicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
}

export class DevicesClient extends grpc.Client implements IDevicesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generatePairingCode(request: devices_requests_pb.GeneratePairingCodeDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GeneratePairingCodeDeviceResponse) => void): grpc.ClientUnaryCall;
    public generatePairingCode(request: devices_requests_pb.GeneratePairingCodeDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GeneratePairingCodeDeviceResponse) => void): grpc.ClientUnaryCall;
    public generatePairingCode(request: devices_requests_pb.GeneratePairingCodeDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GeneratePairingCodeDeviceResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: devices_requests_pb.PairToLocationDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.PairToLocationDeviceResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: devices_requests_pb.PairToLocationDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.PairToLocationDeviceResponse) => void): grpc.ClientUnaryCall;
    public pairToLocation(request: devices_requests_pb.PairToLocationDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.PairToLocationDeviceResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: devices_requests_pb.UnpairDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.UnpairDeviceResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: devices_requests_pb.UnpairDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.UnpairDeviceResponse) => void): grpc.ClientUnaryCall;
    public unpair(request: devices_requests_pb.UnpairDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.UnpairDeviceResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: devices_requests_pb.GetOneDeviceRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GetOneDeviceResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: devices_requests_pb.GetOneDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GetOneDeviceResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: devices_requests_pb.GetOneDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.GetOneDeviceResponse) => void): grpc.ClientUnaryCall;
    public list(request: devices_requests_pb.ListDevicesRequest, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    public list(request: devices_requests_pb.ListDevicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    public list(request: devices_requests_pb.ListDevicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: devices_responses_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
}
