// package: turnly.teams.v1.agents
// file: agents.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as agents_pb from "./agents_pb";
import * as agents_requests_pb from "./agents.requests_pb";
import * as agents_responses_pb from "./agents.responses_pb";

interface IAgentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IAgentsService_IGetOne;
    getByUserId: IAgentsService_IGetByUserId;
}

interface IAgentsService_IGetOne extends grpc.MethodDefinition<agents_requests_pb.GetAgentRequest, agents_responses_pb.GetAgentResponse> {
    path: "/turnly.teams.v1.agents.Agents/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<agents_requests_pb.GetAgentRequest>;
    requestDeserialize: grpc.deserialize<agents_requests_pb.GetAgentRequest>;
    responseSerialize: grpc.serialize<agents_responses_pb.GetAgentResponse>;
    responseDeserialize: grpc.deserialize<agents_responses_pb.GetAgentResponse>;
}
interface IAgentsService_IGetByUserId extends grpc.MethodDefinition<agents_requests_pb.GetAgentByUserIdRequest, agents_responses_pb.GetAgentByUserIdResponse> {
    path: "/turnly.teams.v1.agents.Agents/GetByUserId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<agents_requests_pb.GetAgentByUserIdRequest>;
    requestDeserialize: grpc.deserialize<agents_requests_pb.GetAgentByUserIdRequest>;
    responseSerialize: grpc.serialize<agents_responses_pb.GetAgentByUserIdResponse>;
    responseDeserialize: grpc.deserialize<agents_responses_pb.GetAgentByUserIdResponse>;
}

export const AgentsService: IAgentsService;

export interface IAgentsServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<agents_requests_pb.GetAgentRequest, agents_responses_pb.GetAgentResponse>;
    getByUserId: grpc.handleUnaryCall<agents_requests_pb.GetAgentByUserIdRequest, agents_responses_pb.GetAgentByUserIdResponse>;
}

export interface IAgentsClient {
    getOne(request: agents_requests_pb.GetAgentRequest, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentResponse) => void): grpc.ClientUnaryCall;
    getOne(request: agents_requests_pb.GetAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentResponse) => void): grpc.ClientUnaryCall;
    getOne(request: agents_requests_pb.GetAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentResponse) => void): grpc.ClientUnaryCall;
    getByUserId(request: agents_requests_pb.GetAgentByUserIdRequest, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentByUserIdResponse) => void): grpc.ClientUnaryCall;
    getByUserId(request: agents_requests_pb.GetAgentByUserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentByUserIdResponse) => void): grpc.ClientUnaryCall;
    getByUserId(request: agents_requests_pb.GetAgentByUserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentByUserIdResponse) => void): grpc.ClientUnaryCall;
}

export class AgentsClient extends grpc.Client implements IAgentsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: agents_requests_pb.GetAgentRequest, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: agents_requests_pb.GetAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: agents_requests_pb.GetAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentResponse) => void): grpc.ClientUnaryCall;
    public getByUserId(request: agents_requests_pb.GetAgentByUserIdRequest, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentByUserIdResponse) => void): grpc.ClientUnaryCall;
    public getByUserId(request: agents_requests_pb.GetAgentByUserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentByUserIdResponse) => void): grpc.ClientUnaryCall;
    public getByUserId(request: agents_requests_pb.GetAgentByUserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: agents_responses_pb.GetAgentByUserIdResponse) => void): grpc.ClientUnaryCall;
}
