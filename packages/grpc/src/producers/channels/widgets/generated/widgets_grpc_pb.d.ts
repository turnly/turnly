// package: turnly.channels.v1.widgets
// file: widgets.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as widgets_pb from "./widgets_pb";
import * as widgets_requests_pb from "./widgets.requests_pb";
import * as widgets_responses_pb from "./widgets.responses_pb";

interface IWidgetsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IWidgetsService_IGetOne;
}

interface IWidgetsService_IGetOne extends grpc.MethodDefinition<widgets_requests_pb.GetWidgetRequest, widgets_responses_pb.GetWidgetResponse> {
    path: "/turnly.channels.v1.widgets.Widgets/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<widgets_requests_pb.GetWidgetRequest>;
    requestDeserialize: grpc.deserialize<widgets_requests_pb.GetWidgetRequest>;
    responseSerialize: grpc.serialize<widgets_responses_pb.GetWidgetResponse>;
    responseDeserialize: grpc.deserialize<widgets_responses_pb.GetWidgetResponse>;
}

export const WidgetsService: IWidgetsService;

export interface IWidgetsServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<widgets_requests_pb.GetWidgetRequest, widgets_responses_pb.GetWidgetResponse>;
}

export interface IWidgetsClient {
    getOne(request: widgets_requests_pb.GetWidgetRequest, callback: (error: grpc.ServiceError | null, response: widgets_responses_pb.GetWidgetResponse) => void): grpc.ClientUnaryCall;
    getOne(request: widgets_requests_pb.GetWidgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: widgets_responses_pb.GetWidgetResponse) => void): grpc.ClientUnaryCall;
    getOne(request: widgets_requests_pb.GetWidgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: widgets_responses_pb.GetWidgetResponse) => void): grpc.ClientUnaryCall;
}

export class WidgetsClient extends grpc.Client implements IWidgetsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: widgets_requests_pb.GetWidgetRequest, callback: (error: grpc.ServiceError | null, response: widgets_responses_pb.GetWidgetResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: widgets_requests_pb.GetWidgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: widgets_responses_pb.GetWidgetResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: widgets_requests_pb.GetWidgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: widgets_responses_pb.GetWidgetResponse) => void): grpc.ClientUnaryCall;
}
