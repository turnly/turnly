// package: turnly.business_data_fields.v1.answers
// file: answers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as answers_pb from "./answers_pb";
import * as answers_requests_pb from "./answers.requests_pb";
import * as answers_responses_pb from "./answers.responses_pb";

interface IAnswersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAnswersService_ICreate;
    listByField: IAnswersService_IListByField;
}

interface IAnswersService_ICreate extends grpc.MethodDefinition<answers_requests_pb.CreateAnswersRequest, answers_responses_pb.CreateAnswersResponse> {
    path: "/turnly.business_data_fields.v1.answers.Answers/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<answers_requests_pb.CreateAnswersRequest>;
    requestDeserialize: grpc.deserialize<answers_requests_pb.CreateAnswersRequest>;
    responseSerialize: grpc.serialize<answers_responses_pb.CreateAnswersResponse>;
    responseDeserialize: grpc.deserialize<answers_responses_pb.CreateAnswersResponse>;
}
interface IAnswersService_IListByField extends grpc.MethodDefinition<answers_requests_pb.ListAnswersByFieldRequest, answers_responses_pb.ListAnswersByFieldResponse> {
    path: "/turnly.business_data_fields.v1.answers.Answers/ListByField";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<answers_requests_pb.ListAnswersByFieldRequest>;
    requestDeserialize: grpc.deserialize<answers_requests_pb.ListAnswersByFieldRequest>;
    responseSerialize: grpc.serialize<answers_responses_pb.ListAnswersByFieldResponse>;
    responseDeserialize: grpc.deserialize<answers_responses_pb.ListAnswersByFieldResponse>;
}

export const AnswersService: IAnswersService;

export interface IAnswersServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<answers_requests_pb.CreateAnswersRequest, answers_responses_pb.CreateAnswersResponse>;
    listByField: grpc.handleUnaryCall<answers_requests_pb.ListAnswersByFieldRequest, answers_responses_pb.ListAnswersByFieldResponse>;
}

export interface IAnswersClient {
    create(request: answers_requests_pb.CreateAnswersRequest, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.CreateAnswersResponse) => void): grpc.ClientUnaryCall;
    create(request: answers_requests_pb.CreateAnswersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.CreateAnswersResponse) => void): grpc.ClientUnaryCall;
    create(request: answers_requests_pb.CreateAnswersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.CreateAnswersResponse) => void): grpc.ClientUnaryCall;
    listByField(request: answers_requests_pb.ListAnswersByFieldRequest, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.ListAnswersByFieldResponse) => void): grpc.ClientUnaryCall;
    listByField(request: answers_requests_pb.ListAnswersByFieldRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.ListAnswersByFieldResponse) => void): grpc.ClientUnaryCall;
    listByField(request: answers_requests_pb.ListAnswersByFieldRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.ListAnswersByFieldResponse) => void): grpc.ClientUnaryCall;
}

export class AnswersClient extends grpc.Client implements IAnswersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: answers_requests_pb.CreateAnswersRequest, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.CreateAnswersResponse) => void): grpc.ClientUnaryCall;
    public create(request: answers_requests_pb.CreateAnswersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.CreateAnswersResponse) => void): grpc.ClientUnaryCall;
    public create(request: answers_requests_pb.CreateAnswersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.CreateAnswersResponse) => void): grpc.ClientUnaryCall;
    public listByField(request: answers_requests_pb.ListAnswersByFieldRequest, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.ListAnswersByFieldResponse) => void): grpc.ClientUnaryCall;
    public listByField(request: answers_requests_pb.ListAnswersByFieldRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.ListAnswersByFieldResponse) => void): grpc.ClientUnaryCall;
    public listByField(request: answers_requests_pb.ListAnswersByFieldRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: answers_responses_pb.ListAnswersByFieldResponse) => void): grpc.ClientUnaryCall;
}
