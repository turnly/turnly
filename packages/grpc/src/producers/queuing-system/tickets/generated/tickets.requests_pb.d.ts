// package: turnly.queuing_system.v1.tickets
// file: tickets.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CreateTicketObject extends jspb.Message { 
    getServiceId(): string;
    setServiceId(value: string): CreateTicketObject;
    getLocationId(): string;
    setLocationId(value: string): CreateTicketObject;
    getCustomerId(): string;
    setCustomerId(value: string): CreateTicketObject;
    getServiceName(): string;
    setServiceName(value: string): CreateTicketObject;
    getSource(): string;
    setSource(value: string): CreateTicketObject;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): CreateTicketObject;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTicketObject.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTicketObject): CreateTicketObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTicketObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTicketObject;
    static deserializeBinaryFromReader(message: CreateTicketObject, reader: jspb.BinaryReader): CreateTicketObject;
}

export namespace CreateTicketObject {
    export type AsObject = {
        serviceId: string,
        locationId: string,
        customerId: string,
        serviceName: string,
        source: string,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}

export class CreateTicketRequest extends jspb.Message { 

    hasTicket(): boolean;
    clearTicket(): void;
    getTicket(): CreateTicketObject | undefined;
    setTicket(value?: CreateTicketObject): CreateTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTicketRequest): CreateTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTicketRequest;
    static deserializeBinaryFromReader(message: CreateTicketRequest, reader: jspb.BinaryReader): CreateTicketRequest;
}

export namespace CreateTicketRequest {
    export type AsObject = {
        ticket?: CreateTicketObject.AsObject,
    }
}

export class GetTicketRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTicketRequest;
    getCustomerId(): string;
    setCustomerId(value: string): GetTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketRequest): GetTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketRequest;
    static deserializeBinaryFromReader(message: GetTicketRequest, reader: jspb.BinaryReader): GetTicketRequest;
}

export namespace GetTicketRequest {
    export type AsObject = {
        id: string,
        customerId: string,
    }
}

export class GetTicketDetailsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTicketDetailsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketDetailsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketDetailsRequest): GetTicketDetailsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketDetailsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketDetailsRequest;
    static deserializeBinaryFromReader(message: GetTicketDetailsRequest, reader: jspb.BinaryReader): GetTicketDetailsRequest;
}

export namespace GetTicketDetailsRequest {
    export type AsObject = {
        id: string,
    }
}

export class LeaveTicketRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): LeaveTicketRequest;
    getCustomerId(): string;
    setCustomerId(value: string): LeaveTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveTicketRequest): LeaveTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveTicketRequest;
    static deserializeBinaryFromReader(message: LeaveTicketRequest, reader: jspb.BinaryReader): LeaveTicketRequest;
}

export namespace LeaveTicketRequest {
    export type AsObject = {
        id: string,
        customerId: string,
    }
}

export class AnnounceTicketRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AnnounceTicketRequest;
    getCustomerId(): string;
    setCustomerId(value: string): AnnounceTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnounceTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AnnounceTicketRequest): AnnounceTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnounceTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnounceTicketRequest;
    static deserializeBinaryFromReader(message: AnnounceTicketRequest, reader: jspb.BinaryReader): AnnounceTicketRequest;
}

export namespace AnnounceTicketRequest {
    export type AsObject = {
        id: string,
        customerId: string,
    }
}

export class GetTicketsBeforeYoursRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTicketsBeforeYoursRequest;
    getCustomerId(): string;
    setCustomerId(value: string): GetTicketsBeforeYoursRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketsBeforeYoursRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketsBeforeYoursRequest): GetTicketsBeforeYoursRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketsBeforeYoursRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketsBeforeYoursRequest;
    static deserializeBinaryFromReader(message: GetTicketsBeforeYoursRequest, reader: jspb.BinaryReader): GetTicketsBeforeYoursRequest;
}

export namespace GetTicketsBeforeYoursRequest {
    export type AsObject = {
        id: string,
        customerId: string,
    }
}

export class GetTicketsWaitingForServiceRequest extends jspb.Message { 
    clearServiceIdsList(): void;
    getServiceIdsList(): Array<string>;
    setServiceIdsList(value: Array<string>): GetTicketsWaitingForServiceRequest;
    addServiceIds(value: string, index?: number): string;
    getCustomerId(): string;
    setCustomerId(value: string): GetTicketsWaitingForServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketsWaitingForServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketsWaitingForServiceRequest): GetTicketsWaitingForServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketsWaitingForServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketsWaitingForServiceRequest;
    static deserializeBinaryFromReader(message: GetTicketsWaitingForServiceRequest, reader: jspb.BinaryReader): GetTicketsWaitingForServiceRequest;
}

export namespace GetTicketsWaitingForServiceRequest {
    export type AsObject = {
        serviceIdsList: Array<string>,
        customerId: string,
    }
}

export class GetTicketsForServingFromLocationRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): GetTicketsForServingFromLocationRequest;
    clearServiceIdsList(): void;
    getServiceIdsList(): Array<string>;
    setServiceIdsList(value: Array<string>): GetTicketsForServingFromLocationRequest;
    addServiceIds(value: string, index?: number): string;
    getFindQuery(): string;
    setFindQuery(value: string): GetTicketsForServingFromLocationRequest;
    getStatus(): string;
    setStatus(value: string): GetTicketsForServingFromLocationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketsForServingFromLocationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketsForServingFromLocationRequest): GetTicketsForServingFromLocationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketsForServingFromLocationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketsForServingFromLocationRequest;
    static deserializeBinaryFromReader(message: GetTicketsForServingFromLocationRequest, reader: jspb.BinaryReader): GetTicketsForServingFromLocationRequest;
}

export namespace GetTicketsForServingFromLocationRequest {
    export type AsObject = {
        locationId: string,
        serviceIdsList: Array<string>,
        findQuery: string,
        status: string,
    }
}

export class CallTicketRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): CallTicketRequest;
    getAgentId(): string;
    setAgentId(value: string): CallTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CallTicketRequest): CallTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallTicketRequest;
    static deserializeBinaryFromReader(message: CallTicketRequest, reader: jspb.BinaryReader): CallTicketRequest;
}

export namespace CallTicketRequest {
    export type AsObject = {
        id: string,
        agentId: string,
    }
}

export class ServeTicketRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ServeTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServeTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServeTicketRequest): ServeTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServeTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServeTicketRequest;
    static deserializeBinaryFromReader(message: ServeTicketRequest, reader: jspb.BinaryReader): ServeTicketRequest;
}

export namespace ServeTicketRequest {
    export type AsObject = {
        id: string,
    }
}

export class DiscardTicketRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DiscardTicketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscardTicketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiscardTicketRequest): DiscardTicketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscardTicketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscardTicketRequest;
    static deserializeBinaryFromReader(message: DiscardTicketRequest, reader: jspb.BinaryReader): DiscardTicketRequest;
}

export namespace DiscardTicketRequest {
    export type AsObject = {
        id: string,
    }
}

export class ReturnToQueueRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ReturnToQueueRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnToQueueRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnToQueueRequest): ReturnToQueueRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnToQueueRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnToQueueRequest;
    static deserializeBinaryFromReader(message: ReturnToQueueRequest, reader: jspb.BinaryReader): ReturnToQueueRequest;
}

export namespace ReturnToQueueRequest {
    export type AsObject = {
        id: string,
    }
}
