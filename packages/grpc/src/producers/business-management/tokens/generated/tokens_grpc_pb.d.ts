// package: turnly.business_management.v1.tokens
// file: tokens.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tokens_pb from "./tokens_pb";
import * as tokens_requests_pb from "./tokens.requests_pb";
import * as tokens_responses_pb from "./tokens.responses_pb";

interface ITokensService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITokensService_ICreate;
    exchange: ITokensService_IExchange;
    getOne: ITokensService_IGetOne;
}

interface ITokensService_ICreate extends grpc.MethodDefinition<tokens_requests_pb.CreateTokenRequest, tokens_responses_pb.CreateTokenResponse> {
    path: "/turnly.business_management.v1.tokens.Tokens/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokens_requests_pb.CreateTokenRequest>;
    requestDeserialize: grpc.deserialize<tokens_requests_pb.CreateTokenRequest>;
    responseSerialize: grpc.serialize<tokens_responses_pb.CreateTokenResponse>;
    responseDeserialize: grpc.deserialize<tokens_responses_pb.CreateTokenResponse>;
}
interface ITokensService_IExchange extends grpc.MethodDefinition<tokens_requests_pb.ExchangeTokenRequest, tokens_responses_pb.ExchangeTokenResponse> {
    path: "/turnly.business_management.v1.tokens.Tokens/Exchange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokens_requests_pb.ExchangeTokenRequest>;
    requestDeserialize: grpc.deserialize<tokens_requests_pb.ExchangeTokenRequest>;
    responseSerialize: grpc.serialize<tokens_responses_pb.ExchangeTokenResponse>;
    responseDeserialize: grpc.deserialize<tokens_responses_pb.ExchangeTokenResponse>;
}
interface ITokensService_IGetOne extends grpc.MethodDefinition<tokens_requests_pb.GetTokenRequest, tokens_responses_pb.GetTokenResponse> {
    path: "/turnly.business_management.v1.tokens.Tokens/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokens_requests_pb.GetTokenRequest>;
    requestDeserialize: grpc.deserialize<tokens_requests_pb.GetTokenRequest>;
    responseSerialize: grpc.serialize<tokens_responses_pb.GetTokenResponse>;
    responseDeserialize: grpc.deserialize<tokens_responses_pb.GetTokenResponse>;
}

export const TokensService: ITokensService;

export interface ITokensServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<tokens_requests_pb.CreateTokenRequest, tokens_responses_pb.CreateTokenResponse>;
    exchange: grpc.handleUnaryCall<tokens_requests_pb.ExchangeTokenRequest, tokens_responses_pb.ExchangeTokenResponse>;
    getOne: grpc.handleUnaryCall<tokens_requests_pb.GetTokenRequest, tokens_responses_pb.GetTokenResponse>;
}

export interface ITokensClient {
    create(request: tokens_requests_pb.CreateTokenRequest, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    create(request: tokens_requests_pb.CreateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    create(request: tokens_requests_pb.CreateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    exchange(request: tokens_requests_pb.ExchangeTokenRequest, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.ExchangeTokenResponse) => void): grpc.ClientUnaryCall;
    exchange(request: tokens_requests_pb.ExchangeTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.ExchangeTokenResponse) => void): grpc.ClientUnaryCall;
    exchange(request: tokens_requests_pb.ExchangeTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.ExchangeTokenResponse) => void): grpc.ClientUnaryCall;
    getOne(request: tokens_requests_pb.GetTokenRequest, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.GetTokenResponse) => void): grpc.ClientUnaryCall;
    getOne(request: tokens_requests_pb.GetTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.GetTokenResponse) => void): grpc.ClientUnaryCall;
    getOne(request: tokens_requests_pb.GetTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.GetTokenResponse) => void): grpc.ClientUnaryCall;
}

export class TokensClient extends grpc.Client implements ITokensClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: tokens_requests_pb.CreateTokenRequest, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    public create(request: tokens_requests_pb.CreateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    public create(request: tokens_requests_pb.CreateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    public exchange(request: tokens_requests_pb.ExchangeTokenRequest, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.ExchangeTokenResponse) => void): grpc.ClientUnaryCall;
    public exchange(request: tokens_requests_pb.ExchangeTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.ExchangeTokenResponse) => void): grpc.ClientUnaryCall;
    public exchange(request: tokens_requests_pb.ExchangeTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.ExchangeTokenResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: tokens_requests_pb.GetTokenRequest, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.GetTokenResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: tokens_requests_pb.GetTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.GetTokenResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: tokens_requests_pb.GetTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokens_responses_pb.GetTokenResponse) => void): grpc.ClientUnaryCall;
}
