// package: turnly.business_management.v1.members
// file: members.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as members_pb from "./members_pb";
import * as members_requests_pb from "./members.requests_pb";
import * as members_responses_pb from "./members.responses_pb";

interface IMembersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IMembersService_IGetOne;
    getByUserId: IMembersService_IGetByUserId;
}

interface IMembersService_IGetOne extends grpc.MethodDefinition<members_requests_pb.GetMemberRequest, members_responses_pb.GetMemberResponse> {
    path: "/turnly.business_management.v1.members.Members/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<members_requests_pb.GetMemberRequest>;
    requestDeserialize: grpc.deserialize<members_requests_pb.GetMemberRequest>;
    responseSerialize: grpc.serialize<members_responses_pb.GetMemberResponse>;
    responseDeserialize: grpc.deserialize<members_responses_pb.GetMemberResponse>;
}
interface IMembersService_IGetByUserId extends grpc.MethodDefinition<members_requests_pb.GetMemberByUserIdRequest, members_responses_pb.GetMemberByUserIdResponse> {
    path: "/turnly.business_management.v1.members.Members/GetByUserId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<members_requests_pb.GetMemberByUserIdRequest>;
    requestDeserialize: grpc.deserialize<members_requests_pb.GetMemberByUserIdRequest>;
    responseSerialize: grpc.serialize<members_responses_pb.GetMemberByUserIdResponse>;
    responseDeserialize: grpc.deserialize<members_responses_pb.GetMemberByUserIdResponse>;
}

export const MembersService: IMembersService;

export interface IMembersServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<members_requests_pb.GetMemberRequest, members_responses_pb.GetMemberResponse>;
    getByUserId: grpc.handleUnaryCall<members_requests_pb.GetMemberByUserIdRequest, members_responses_pb.GetMemberByUserIdResponse>;
}

export interface IMembersClient {
    getOne(request: members_requests_pb.GetMemberRequest, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberResponse) => void): grpc.ClientUnaryCall;
    getOne(request: members_requests_pb.GetMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberResponse) => void): grpc.ClientUnaryCall;
    getOne(request: members_requests_pb.GetMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberResponse) => void): grpc.ClientUnaryCall;
    getByUserId(request: members_requests_pb.GetMemberByUserIdRequest, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberByUserIdResponse) => void): grpc.ClientUnaryCall;
    getByUserId(request: members_requests_pb.GetMemberByUserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberByUserIdResponse) => void): grpc.ClientUnaryCall;
    getByUserId(request: members_requests_pb.GetMemberByUserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberByUserIdResponse) => void): grpc.ClientUnaryCall;
}

export class MembersClient extends grpc.Client implements IMembersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: members_requests_pb.GetMemberRequest, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: members_requests_pb.GetMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: members_requests_pb.GetMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberResponse) => void): grpc.ClientUnaryCall;
    public getByUserId(request: members_requests_pb.GetMemberByUserIdRequest, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberByUserIdResponse) => void): grpc.ClientUnaryCall;
    public getByUserId(request: members_requests_pb.GetMemberByUserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberByUserIdResponse) => void): grpc.ClientUnaryCall;
    public getByUserId(request: members_requests_pb.GetMemberByUserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: members_responses_pb.GetMemberByUserIdResponse) => void): grpc.ClientUnaryCall;
}
