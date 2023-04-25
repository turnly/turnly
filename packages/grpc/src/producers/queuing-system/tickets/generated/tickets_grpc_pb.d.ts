// package: turnly.queuing_system.v1.tickets
// file: tickets.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tickets_pb from "./tickets_pb";
import * as tickets_requests_pb from "./tickets.requests_pb";
import * as tickets_responses_pb from "./tickets.responses_pb";

interface ITicketsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITicketsService_ICreate;
    getOne: ITicketsService_IGetOne;
    getDetails: ITicketsService_IGetDetails;
    leave: ITicketsService_ILeave;
    announce: ITicketsService_IAnnounce;
    call: ITicketsService_ICall;
    getTicketsBeforeYours: ITicketsService_IGetTicketsBeforeYours;
    getTicketsWaitingForService: ITicketsService_IGetTicketsWaitingForService;
    getTicketsForServingFromLocation: ITicketsService_IGetTicketsForServingFromLocation;
    serve: ITicketsService_IServe;
    discard: ITicketsService_IDiscard;
    returnToQueue: ITicketsService_IReturnToQueue;
}

interface ITicketsService_ICreate extends grpc.MethodDefinition<tickets_requests_pb.CreateTicketRequest, tickets_responses_pb.CreateTicketResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.CreateTicketRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.CreateTicketRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.CreateTicketResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.CreateTicketResponse>;
}
interface ITicketsService_IGetOne extends grpc.MethodDefinition<tickets_requests_pb.GetTicketRequest, tickets_responses_pb.GetTicketResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.GetTicketRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.GetTicketRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.GetTicketResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.GetTicketResponse>;
}
interface ITicketsService_IGetDetails extends grpc.MethodDefinition<tickets_requests_pb.GetTicketDetailsRequest, tickets_responses_pb.GetTicketDetailsResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/GetDetails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.GetTicketDetailsRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.GetTicketDetailsRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.GetTicketDetailsResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.GetTicketDetailsResponse>;
}
interface ITicketsService_ILeave extends grpc.MethodDefinition<tickets_requests_pb.LeaveTicketRequest, tickets_responses_pb.LeaveTicketResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/Leave";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.LeaveTicketRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.LeaveTicketRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.LeaveTicketResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.LeaveTicketResponse>;
}
interface ITicketsService_IAnnounce extends grpc.MethodDefinition<tickets_requests_pb.AnnounceMyArrivalRequest, tickets_responses_pb.AnnounceMyArrivalResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/Announce";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.AnnounceMyArrivalRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.AnnounceMyArrivalRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.AnnounceMyArrivalResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.AnnounceMyArrivalResponse>;
}
interface ITicketsService_ICall extends grpc.MethodDefinition<tickets_requests_pb.CallTicketToDeskRequest, tickets_responses_pb.CallTicketToDeskResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/Call";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.CallTicketToDeskRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.CallTicketToDeskRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.CallTicketToDeskResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.CallTicketToDeskResponse>;
}
interface ITicketsService_IGetTicketsBeforeYours extends grpc.MethodDefinition<tickets_requests_pb.GetTicketsBeforeYoursRequest, tickets_responses_pb.GetTicketsBeforeYoursResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/GetTicketsBeforeYours";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.GetTicketsBeforeYoursRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.GetTicketsBeforeYoursRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.GetTicketsBeforeYoursResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.GetTicketsBeforeYoursResponse>;
}
interface ITicketsService_IGetTicketsWaitingForService extends grpc.MethodDefinition<tickets_requests_pb.GetTicketsWaitingForServiceRequest, tickets_responses_pb.GetTicketsWaitingForServiceResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/GetTicketsWaitingForService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.GetTicketsWaitingForServiceRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.GetTicketsWaitingForServiceRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.GetTicketsWaitingForServiceResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.GetTicketsWaitingForServiceResponse>;
}
interface ITicketsService_IGetTicketsForServingFromLocation extends grpc.MethodDefinition<tickets_requests_pb.GetTicketsForServingFromLocationRequest, tickets_responses_pb.GetTicketsForServingFromLocationResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/GetTicketsForServingFromLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.GetTicketsForServingFromLocationRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.GetTicketsForServingFromLocationRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.GetTicketsForServingFromLocationResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.GetTicketsForServingFromLocationResponse>;
}
interface ITicketsService_IServe extends grpc.MethodDefinition<tickets_requests_pb.ServeTicketRequest, tickets_responses_pb.ServeTicketResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/Serve";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.ServeTicketRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.ServeTicketRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.ServeTicketResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.ServeTicketResponse>;
}
interface ITicketsService_IDiscard extends grpc.MethodDefinition<tickets_requests_pb.DiscardTicketRequest, tickets_responses_pb.DiscardTicketResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/Discard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.DiscardTicketRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.DiscardTicketRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.DiscardTicketResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.DiscardTicketResponse>;
}
interface ITicketsService_IReturnToQueue extends grpc.MethodDefinition<tickets_requests_pb.ReturnToQueueRequest, tickets_responses_pb.ReturnToQueueResponse> {
    path: "/turnly.queuing_system.v1.tickets.Tickets/ReturnToQueue";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_requests_pb.ReturnToQueueRequest>;
    requestDeserialize: grpc.deserialize<tickets_requests_pb.ReturnToQueueRequest>;
    responseSerialize: grpc.serialize<tickets_responses_pb.ReturnToQueueResponse>;
    responseDeserialize: grpc.deserialize<tickets_responses_pb.ReturnToQueueResponse>;
}

export const TicketsService: ITicketsService;

export interface ITicketsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<tickets_requests_pb.CreateTicketRequest, tickets_responses_pb.CreateTicketResponse>;
    getOne: grpc.handleUnaryCall<tickets_requests_pb.GetTicketRequest, tickets_responses_pb.GetTicketResponse>;
    getDetails: grpc.handleUnaryCall<tickets_requests_pb.GetTicketDetailsRequest, tickets_responses_pb.GetTicketDetailsResponse>;
    leave: grpc.handleUnaryCall<tickets_requests_pb.LeaveTicketRequest, tickets_responses_pb.LeaveTicketResponse>;
    announce: grpc.handleUnaryCall<tickets_requests_pb.AnnounceMyArrivalRequest, tickets_responses_pb.AnnounceMyArrivalResponse>;
    call: grpc.handleUnaryCall<tickets_requests_pb.CallTicketToDeskRequest, tickets_responses_pb.CallTicketToDeskResponse>;
    getTicketsBeforeYours: grpc.handleUnaryCall<tickets_requests_pb.GetTicketsBeforeYoursRequest, tickets_responses_pb.GetTicketsBeforeYoursResponse>;
    getTicketsWaitingForService: grpc.handleUnaryCall<tickets_requests_pb.GetTicketsWaitingForServiceRequest, tickets_responses_pb.GetTicketsWaitingForServiceResponse>;
    getTicketsForServingFromLocation: grpc.handleUnaryCall<tickets_requests_pb.GetTicketsForServingFromLocationRequest, tickets_responses_pb.GetTicketsForServingFromLocationResponse>;
    serve: grpc.handleUnaryCall<tickets_requests_pb.ServeTicketRequest, tickets_responses_pb.ServeTicketResponse>;
    discard: grpc.handleUnaryCall<tickets_requests_pb.DiscardTicketRequest, tickets_responses_pb.DiscardTicketResponse>;
    returnToQueue: grpc.handleUnaryCall<tickets_requests_pb.ReturnToQueueRequest, tickets_responses_pb.ReturnToQueueResponse>;
}

export interface ITicketsClient {
    create(request: tickets_requests_pb.CreateTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CreateTicketResponse) => void): grpc.ClientUnaryCall;
    create(request: tickets_requests_pb.CreateTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CreateTicketResponse) => void): grpc.ClientUnaryCall;
    create(request: tickets_requests_pb.CreateTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CreateTicketResponse) => void): grpc.ClientUnaryCall;
    getOne(request: tickets_requests_pb.GetTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketResponse) => void): grpc.ClientUnaryCall;
    getOne(request: tickets_requests_pb.GetTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketResponse) => void): grpc.ClientUnaryCall;
    getOne(request: tickets_requests_pb.GetTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketResponse) => void): grpc.ClientUnaryCall;
    getDetails(request: tickets_requests_pb.GetTicketDetailsRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketDetailsResponse) => void): grpc.ClientUnaryCall;
    getDetails(request: tickets_requests_pb.GetTicketDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketDetailsResponse) => void): grpc.ClientUnaryCall;
    getDetails(request: tickets_requests_pb.GetTicketDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketDetailsResponse) => void): grpc.ClientUnaryCall;
    leave(request: tickets_requests_pb.LeaveTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.LeaveTicketResponse) => void): grpc.ClientUnaryCall;
    leave(request: tickets_requests_pb.LeaveTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.LeaveTicketResponse) => void): grpc.ClientUnaryCall;
    leave(request: tickets_requests_pb.LeaveTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.LeaveTicketResponse) => void): grpc.ClientUnaryCall;
    announce(request: tickets_requests_pb.AnnounceMyArrivalRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.AnnounceMyArrivalResponse) => void): grpc.ClientUnaryCall;
    announce(request: tickets_requests_pb.AnnounceMyArrivalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.AnnounceMyArrivalResponse) => void): grpc.ClientUnaryCall;
    announce(request: tickets_requests_pb.AnnounceMyArrivalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.AnnounceMyArrivalResponse) => void): grpc.ClientUnaryCall;
    call(request: tickets_requests_pb.CallTicketToDeskRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CallTicketToDeskResponse) => void): grpc.ClientUnaryCall;
    call(request: tickets_requests_pb.CallTicketToDeskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CallTicketToDeskResponse) => void): grpc.ClientUnaryCall;
    call(request: tickets_requests_pb.CallTicketToDeskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CallTicketToDeskResponse) => void): grpc.ClientUnaryCall;
    getTicketsBeforeYours(request: tickets_requests_pb.GetTicketsBeforeYoursRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsBeforeYoursResponse) => void): grpc.ClientUnaryCall;
    getTicketsBeforeYours(request: tickets_requests_pb.GetTicketsBeforeYoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsBeforeYoursResponse) => void): grpc.ClientUnaryCall;
    getTicketsBeforeYours(request: tickets_requests_pb.GetTicketsBeforeYoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsBeforeYoursResponse) => void): grpc.ClientUnaryCall;
    getTicketsWaitingForService(request: tickets_requests_pb.GetTicketsWaitingForServiceRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsWaitingForServiceResponse) => void): grpc.ClientUnaryCall;
    getTicketsWaitingForService(request: tickets_requests_pb.GetTicketsWaitingForServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsWaitingForServiceResponse) => void): grpc.ClientUnaryCall;
    getTicketsWaitingForService(request: tickets_requests_pb.GetTicketsWaitingForServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsWaitingForServiceResponse) => void): grpc.ClientUnaryCall;
    getTicketsForServingFromLocation(request: tickets_requests_pb.GetTicketsForServingFromLocationRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsForServingFromLocationResponse) => void): grpc.ClientUnaryCall;
    getTicketsForServingFromLocation(request: tickets_requests_pb.GetTicketsForServingFromLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsForServingFromLocationResponse) => void): grpc.ClientUnaryCall;
    getTicketsForServingFromLocation(request: tickets_requests_pb.GetTicketsForServingFromLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsForServingFromLocationResponse) => void): grpc.ClientUnaryCall;
    serve(request: tickets_requests_pb.ServeTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ServeTicketResponse) => void): grpc.ClientUnaryCall;
    serve(request: tickets_requests_pb.ServeTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ServeTicketResponse) => void): grpc.ClientUnaryCall;
    serve(request: tickets_requests_pb.ServeTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ServeTicketResponse) => void): grpc.ClientUnaryCall;
    discard(request: tickets_requests_pb.DiscardTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.DiscardTicketResponse) => void): grpc.ClientUnaryCall;
    discard(request: tickets_requests_pb.DiscardTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.DiscardTicketResponse) => void): grpc.ClientUnaryCall;
    discard(request: tickets_requests_pb.DiscardTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.DiscardTicketResponse) => void): grpc.ClientUnaryCall;
    returnToQueue(request: tickets_requests_pb.ReturnToQueueRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ReturnToQueueResponse) => void): grpc.ClientUnaryCall;
    returnToQueue(request: tickets_requests_pb.ReturnToQueueRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ReturnToQueueResponse) => void): grpc.ClientUnaryCall;
    returnToQueue(request: tickets_requests_pb.ReturnToQueueRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ReturnToQueueResponse) => void): grpc.ClientUnaryCall;
}

export class TicketsClient extends grpc.Client implements ITicketsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: tickets_requests_pb.CreateTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CreateTicketResponse) => void): grpc.ClientUnaryCall;
    public create(request: tickets_requests_pb.CreateTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CreateTicketResponse) => void): grpc.ClientUnaryCall;
    public create(request: tickets_requests_pb.CreateTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CreateTicketResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: tickets_requests_pb.GetTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: tickets_requests_pb.GetTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: tickets_requests_pb.GetTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketResponse) => void): grpc.ClientUnaryCall;
    public getDetails(request: tickets_requests_pb.GetTicketDetailsRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketDetailsResponse) => void): grpc.ClientUnaryCall;
    public getDetails(request: tickets_requests_pb.GetTicketDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketDetailsResponse) => void): grpc.ClientUnaryCall;
    public getDetails(request: tickets_requests_pb.GetTicketDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketDetailsResponse) => void): grpc.ClientUnaryCall;
    public leave(request: tickets_requests_pb.LeaveTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.LeaveTicketResponse) => void): grpc.ClientUnaryCall;
    public leave(request: tickets_requests_pb.LeaveTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.LeaveTicketResponse) => void): grpc.ClientUnaryCall;
    public leave(request: tickets_requests_pb.LeaveTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.LeaveTicketResponse) => void): grpc.ClientUnaryCall;
    public announce(request: tickets_requests_pb.AnnounceMyArrivalRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.AnnounceMyArrivalResponse) => void): grpc.ClientUnaryCall;
    public announce(request: tickets_requests_pb.AnnounceMyArrivalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.AnnounceMyArrivalResponse) => void): grpc.ClientUnaryCall;
    public announce(request: tickets_requests_pb.AnnounceMyArrivalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.AnnounceMyArrivalResponse) => void): grpc.ClientUnaryCall;
    public call(request: tickets_requests_pb.CallTicketToDeskRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CallTicketToDeskResponse) => void): grpc.ClientUnaryCall;
    public call(request: tickets_requests_pb.CallTicketToDeskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CallTicketToDeskResponse) => void): grpc.ClientUnaryCall;
    public call(request: tickets_requests_pb.CallTicketToDeskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.CallTicketToDeskResponse) => void): grpc.ClientUnaryCall;
    public getTicketsBeforeYours(request: tickets_requests_pb.GetTicketsBeforeYoursRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsBeforeYoursResponse) => void): grpc.ClientUnaryCall;
    public getTicketsBeforeYours(request: tickets_requests_pb.GetTicketsBeforeYoursRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsBeforeYoursResponse) => void): grpc.ClientUnaryCall;
    public getTicketsBeforeYours(request: tickets_requests_pb.GetTicketsBeforeYoursRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsBeforeYoursResponse) => void): grpc.ClientUnaryCall;
    public getTicketsWaitingForService(request: tickets_requests_pb.GetTicketsWaitingForServiceRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsWaitingForServiceResponse) => void): grpc.ClientUnaryCall;
    public getTicketsWaitingForService(request: tickets_requests_pb.GetTicketsWaitingForServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsWaitingForServiceResponse) => void): grpc.ClientUnaryCall;
    public getTicketsWaitingForService(request: tickets_requests_pb.GetTicketsWaitingForServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsWaitingForServiceResponse) => void): grpc.ClientUnaryCall;
    public getTicketsForServingFromLocation(request: tickets_requests_pb.GetTicketsForServingFromLocationRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsForServingFromLocationResponse) => void): grpc.ClientUnaryCall;
    public getTicketsForServingFromLocation(request: tickets_requests_pb.GetTicketsForServingFromLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsForServingFromLocationResponse) => void): grpc.ClientUnaryCall;
    public getTicketsForServingFromLocation(request: tickets_requests_pb.GetTicketsForServingFromLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.GetTicketsForServingFromLocationResponse) => void): grpc.ClientUnaryCall;
    public serve(request: tickets_requests_pb.ServeTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ServeTicketResponse) => void): grpc.ClientUnaryCall;
    public serve(request: tickets_requests_pb.ServeTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ServeTicketResponse) => void): grpc.ClientUnaryCall;
    public serve(request: tickets_requests_pb.ServeTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ServeTicketResponse) => void): grpc.ClientUnaryCall;
    public discard(request: tickets_requests_pb.DiscardTicketRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.DiscardTicketResponse) => void): grpc.ClientUnaryCall;
    public discard(request: tickets_requests_pb.DiscardTicketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.DiscardTicketResponse) => void): grpc.ClientUnaryCall;
    public discard(request: tickets_requests_pb.DiscardTicketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.DiscardTicketResponse) => void): grpc.ClientUnaryCall;
    public returnToQueue(request: tickets_requests_pb.ReturnToQueueRequest, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ReturnToQueueResponse) => void): grpc.ClientUnaryCall;
    public returnToQueue(request: tickets_requests_pb.ReturnToQueueRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ReturnToQueueResponse) => void): grpc.ClientUnaryCall;
    public returnToQueue(request: tickets_requests_pb.ReturnToQueueRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_responses_pb.ReturnToQueueResponse) => void): grpc.ClientUnaryCall;
}
