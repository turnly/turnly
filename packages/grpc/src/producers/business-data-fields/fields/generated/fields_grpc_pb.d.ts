// package: turnly.business_data_fields.v1.fields
// file: fields.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as fields_pb from "./fields_pb";
import * as fields_requests_pb from "./fields.requests_pb";
import * as fields_responses_pb from "./fields.responses_pb";

interface IFieldsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findCustomerFieldsByService: IFieldsService_IFindCustomerFieldsByService;
}

interface IFieldsService_IFindCustomerFieldsByService extends grpc.MethodDefinition<fields_requests_pb.FindCustomerFieldsByServiceRequest, fields_responses_pb.FindCustomerFieldsByServiceResponse> {
    path: "/turnly.business_data_fields.v1.fields.Fields/FindCustomerFieldsByService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<fields_requests_pb.FindCustomerFieldsByServiceRequest>;
    requestDeserialize: grpc.deserialize<fields_requests_pb.FindCustomerFieldsByServiceRequest>;
    responseSerialize: grpc.serialize<fields_responses_pb.FindCustomerFieldsByServiceResponse>;
    responseDeserialize: grpc.deserialize<fields_responses_pb.FindCustomerFieldsByServiceResponse>;
}

export const FieldsService: IFieldsService;

export interface IFieldsServer extends grpc.UntypedServiceImplementation {
    findCustomerFieldsByService: grpc.handleUnaryCall<fields_requests_pb.FindCustomerFieldsByServiceRequest, fields_responses_pb.FindCustomerFieldsByServiceResponse>;
}

export interface IFieldsClient {
    findCustomerFieldsByService(request: fields_requests_pb.FindCustomerFieldsByServiceRequest, callback: (error: grpc.ServiceError | null, response: fields_responses_pb.FindCustomerFieldsByServiceResponse) => void): grpc.ClientUnaryCall;
    findCustomerFieldsByService(request: fields_requests_pb.FindCustomerFieldsByServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fields_responses_pb.FindCustomerFieldsByServiceResponse) => void): grpc.ClientUnaryCall;
    findCustomerFieldsByService(request: fields_requests_pb.FindCustomerFieldsByServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fields_responses_pb.FindCustomerFieldsByServiceResponse) => void): grpc.ClientUnaryCall;
}

export class FieldsClient extends grpc.Client implements IFieldsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public findCustomerFieldsByService(request: fields_requests_pb.FindCustomerFieldsByServiceRequest, callback: (error: grpc.ServiceError | null, response: fields_responses_pb.FindCustomerFieldsByServiceResponse) => void): grpc.ClientUnaryCall;
    public findCustomerFieldsByService(request: fields_requests_pb.FindCustomerFieldsByServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fields_responses_pb.FindCustomerFieldsByServiceResponse) => void): grpc.ClientUnaryCall;
    public findCustomerFieldsByService(request: fields_requests_pb.FindCustomerFieldsByServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fields_responses_pb.FindCustomerFieldsByServiceResponse) => void): grpc.ClientUnaryCall;
}
