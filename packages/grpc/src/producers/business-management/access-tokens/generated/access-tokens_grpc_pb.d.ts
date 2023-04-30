// package: turnly.business_management.v1.access_tokens
// file: access-tokens.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as access_tokens_pb from "./access-tokens_pb";
import * as access_tokens_requests_pb from "./access-tokens.requests_pb";
import * as access_tokens_responses_pb from "./access-tokens.responses_pb";

interface IAccessTokensService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAccessTokensService_ICreate;
    exchange: IAccessTokensService_IExchange;
    getOne: IAccessTokensService_IGetOne;
}

interface IAccessTokensService_ICreate extends grpc.MethodDefinition<access_tokens_requests_pb.CreateAccessTokenRequest, access_tokens_responses_pb.CreateAccessTokenResponse> {
    path: "/turnly.business_management.v1.access_tokens.AccessTokens/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_tokens_requests_pb.CreateAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_tokens_requests_pb.CreateAccessTokenRequest>;
    responseSerialize: grpc.serialize<access_tokens_responses_pb.CreateAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<access_tokens_responses_pb.CreateAccessTokenResponse>;
}
interface IAccessTokensService_IExchange extends grpc.MethodDefinition<access_tokens_requests_pb.ExchangeAccessTokenRequest, access_tokens_responses_pb.ExchangeAccessTokenResponse> {
    path: "/turnly.business_management.v1.access_tokens.AccessTokens/Exchange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_tokens_requests_pb.ExchangeAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_tokens_requests_pb.ExchangeAccessTokenRequest>;
    responseSerialize: grpc.serialize<access_tokens_responses_pb.ExchangeAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<access_tokens_responses_pb.ExchangeAccessTokenResponse>;
}
interface IAccessTokensService_IGetOne extends grpc.MethodDefinition<access_tokens_requests_pb.GetAccessTokenRequest, access_tokens_responses_pb.GetAccessTokenResponse> {
    path: "/turnly.business_management.v1.access_tokens.AccessTokens/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_tokens_requests_pb.GetAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_tokens_requests_pb.GetAccessTokenRequest>;
    responseSerialize: grpc.serialize<access_tokens_responses_pb.GetAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<access_tokens_responses_pb.GetAccessTokenResponse>;
}

export const AccessTokensService: IAccessTokensService;

export interface IAccessTokensServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<access_tokens_requests_pb.CreateAccessTokenRequest, access_tokens_responses_pb.CreateAccessTokenResponse>;
    exchange: grpc.handleUnaryCall<access_tokens_requests_pb.ExchangeAccessTokenRequest, access_tokens_responses_pb.ExchangeAccessTokenResponse>;
    getOne: grpc.handleUnaryCall<access_tokens_requests_pb.GetAccessTokenRequest, access_tokens_responses_pb.GetAccessTokenResponse>;
}

export interface IAccessTokensClient {
    create(request: access_tokens_requests_pb.CreateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.CreateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    create(request: access_tokens_requests_pb.CreateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.CreateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    create(request: access_tokens_requests_pb.CreateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.CreateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    exchange(request: access_tokens_requests_pb.ExchangeAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.ExchangeAccessTokenResponse) => void): grpc.ClientUnaryCall;
    exchange(request: access_tokens_requests_pb.ExchangeAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.ExchangeAccessTokenResponse) => void): grpc.ClientUnaryCall;
    exchange(request: access_tokens_requests_pb.ExchangeAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.ExchangeAccessTokenResponse) => void): grpc.ClientUnaryCall;
    getOne(request: access_tokens_requests_pb.GetAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    getOne(request: access_tokens_requests_pb.GetAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    getOne(request: access_tokens_requests_pb.GetAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AccessTokensClient extends grpc.Client implements IAccessTokensClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: access_tokens_requests_pb.CreateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.CreateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public create(request: access_tokens_requests_pb.CreateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.CreateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public create(request: access_tokens_requests_pb.CreateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.CreateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public exchange(request: access_tokens_requests_pb.ExchangeAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.ExchangeAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public exchange(request: access_tokens_requests_pb.ExchangeAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.ExchangeAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public exchange(request: access_tokens_requests_pb.ExchangeAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.ExchangeAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: access_tokens_requests_pb.GetAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: access_tokens_requests_pb.GetAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: access_tokens_requests_pb.GetAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_tokens_responses_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
}
