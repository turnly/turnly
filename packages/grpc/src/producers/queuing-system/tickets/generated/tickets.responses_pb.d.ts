// package: turnly.queuing_system.v1.tickets
// file: tickets.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Ticket extends jspb.Message { 
    getId(): string;
    setId(value: string): Ticket;
    getStatus(): string;
    setStatus(value: string): Ticket;
    getPriority(): string;
    setPriority(value: string): Ticket;
    getSource(): string;
    setSource(value: string): Ticket;
    getDisplayCode(): string;
    setDisplayCode(value: string): Ticket;
    getServiceId(): string;
    setServiceId(value: string): Ticket;
    getLocationId(): string;
    setLocationId(value: string): Ticket;
    getCustomerId(): string;
    setCustomerId(value: string): Ticket;
    getAssigneeId(): string;
    setAssigneeId(value: string): Ticket;
    getCreatedAt(): string;
    setCreatedAt(value: string): Ticket;

    hasRating(): boolean;
    clearRating(): void;
    getRating(): Ticket.Rating | undefined;
    setRating(value?: Ticket.Rating): Ticket;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): Ticket;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ticket.AsObject;
    static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ticket;
    static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
    export type AsObject = {
        id: string,
        status: string,
        priority: string,
        source: string,
        displayCode: string,
        serviceId: string,
        locationId: string,
        customerId: string,
        assigneeId: string,
        createdAt: string,
        rating?: Ticket.Rating.AsObject,
        extrasList: Array<common_pb.Extra.AsObject>,
    }


    export class Rating extends jspb.Message { 
        getScore(): string;
        setScore(value: string): Rating;
        getComment(): string;
        setComment(value: string): Rating;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rating.AsObject;
        static toObject(includeInstance: boolean, msg: Rating): Rating.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rating, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rating;
        static deserializeBinaryFromReader(message: Rating, reader: jspb.BinaryReader): Rating;
    }

    export namespace Rating {
        export type AsObject = {
            score: string,
            comment: string,
        }
    }

}

export class CreateTicketResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): CreateTicketResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CreateTicketResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTicketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTicketResponse): CreateTicketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTicketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTicketResponse;
    static deserializeBinaryFromReader(message: CreateTicketResponse, reader: jspb.BinaryReader): CreateTicketResponse;
}

export namespace CreateTicketResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetTicketDetailsResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): GetTicketDetailsResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetTicketDetailsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketDetailsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketDetailsResponse): GetTicketDetailsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketDetailsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketDetailsResponse;
    static deserializeBinaryFromReader(message: GetTicketDetailsResponse, reader: jspb.BinaryReader): GetTicketDetailsResponse;
}

export namespace GetTicketDetailsResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetTicketResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): GetTicketResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetTicketResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketResponse): GetTicketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketResponse;
    static deserializeBinaryFromReader(message: GetTicketResponse, reader: jspb.BinaryReader): GetTicketResponse;
}

export namespace GetTicketResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetTicketsBeforeYoursResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Ticket>;
    setDataList(value: Array<Ticket>): GetTicketsBeforeYoursResponse;
    addData(value?: Ticket, index?: number): Ticket;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetTicketsBeforeYoursResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketsBeforeYoursResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketsBeforeYoursResponse): GetTicketsBeforeYoursResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketsBeforeYoursResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketsBeforeYoursResponse;
    static deserializeBinaryFromReader(message: GetTicketsBeforeYoursResponse, reader: jspb.BinaryReader): GetTicketsBeforeYoursResponse;
}

export namespace GetTicketsBeforeYoursResponse {
    export type AsObject = {
        dataList: Array<Ticket.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetTicketsWaitingForServiceResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<GetTicketsWaitingForServiceResponse.ServiceTickets>;
    setDataList(value: Array<GetTicketsWaitingForServiceResponse.ServiceTickets>): GetTicketsWaitingForServiceResponse;
    addData(value?: GetTicketsWaitingForServiceResponse.ServiceTickets, index?: number): GetTicketsWaitingForServiceResponse.ServiceTickets;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetTicketsWaitingForServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketsWaitingForServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketsWaitingForServiceResponse): GetTicketsWaitingForServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketsWaitingForServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketsWaitingForServiceResponse;
    static deserializeBinaryFromReader(message: GetTicketsWaitingForServiceResponse, reader: jspb.BinaryReader): GetTicketsWaitingForServiceResponse;
}

export namespace GetTicketsWaitingForServiceResponse {
    export type AsObject = {
        dataList: Array<GetTicketsWaitingForServiceResponse.ServiceTickets.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }


    export class ServiceTickets extends jspb.Message { 
        getWaitingFor(): string;
        setWaitingFor(value: string): ServiceTickets;
        clearTicketsList(): void;
        getTicketsList(): Array<Ticket>;
        setTicketsList(value: Array<Ticket>): ServiceTickets;
        addTickets(value?: Ticket, index?: number): Ticket;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ServiceTickets.AsObject;
        static toObject(includeInstance: boolean, msg: ServiceTickets): ServiceTickets.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ServiceTickets, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ServiceTickets;
        static deserializeBinaryFromReader(message: ServiceTickets, reader: jspb.BinaryReader): ServiceTickets;
    }

    export namespace ServiceTickets {
        export type AsObject = {
            waitingFor: string,
            ticketsList: Array<Ticket.AsObject>,
        }
    }

}

export class GetTicketsForServingFromLocationResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Ticket>;
    setDataList(value: Array<Ticket>): GetTicketsForServingFromLocationResponse;
    addData(value?: Ticket, index?: number): Ticket;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetTicketsForServingFromLocationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTicketsForServingFromLocationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTicketsForServingFromLocationResponse): GetTicketsForServingFromLocationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTicketsForServingFromLocationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTicketsForServingFromLocationResponse;
    static deserializeBinaryFromReader(message: GetTicketsForServingFromLocationResponse, reader: jspb.BinaryReader): GetTicketsForServingFromLocationResponse;
}

export namespace GetTicketsForServingFromLocationResponse {
    export type AsObject = {
        dataList: Array<Ticket.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ListTicketsForSignageDisplaysResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Ticket>;
    setDataList(value: Array<Ticket>): ListTicketsForSignageDisplaysResponse;
    addData(value?: Ticket, index?: number): Ticket;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListTicketsForSignageDisplaysResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTicketsForSignageDisplaysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTicketsForSignageDisplaysResponse): ListTicketsForSignageDisplaysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTicketsForSignageDisplaysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTicketsForSignageDisplaysResponse;
    static deserializeBinaryFromReader(message: ListTicketsForSignageDisplaysResponse, reader: jspb.BinaryReader): ListTicketsForSignageDisplaysResponse;
}

export namespace ListTicketsForSignageDisplaysResponse {
    export type AsObject = {
        dataList: Array<Ticket.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class LeaveTicketResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): LeaveTicketResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): LeaveTicketResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveTicketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveTicketResponse): LeaveTicketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveTicketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveTicketResponse;
    static deserializeBinaryFromReader(message: LeaveTicketResponse, reader: jspb.BinaryReader): LeaveTicketResponse;
}

export namespace LeaveTicketResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class AnnounceMyArrivalResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): AnnounceMyArrivalResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): AnnounceMyArrivalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnounceMyArrivalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AnnounceMyArrivalResponse): AnnounceMyArrivalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnounceMyArrivalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnounceMyArrivalResponse;
    static deserializeBinaryFromReader(message: AnnounceMyArrivalResponse, reader: jspb.BinaryReader): AnnounceMyArrivalResponse;
}

export namespace AnnounceMyArrivalResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class CallTicketToDeskResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): CallTicketToDeskResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CallTicketToDeskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallTicketToDeskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CallTicketToDeskResponse): CallTicketToDeskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallTicketToDeskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallTicketToDeskResponse;
    static deserializeBinaryFromReader(message: CallTicketToDeskResponse, reader: jspb.BinaryReader): CallTicketToDeskResponse;
}

export namespace CallTicketToDeskResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ServeTicketResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): ServeTicketResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ServeTicketResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServeTicketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ServeTicketResponse): ServeTicketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServeTicketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServeTicketResponse;
    static deserializeBinaryFromReader(message: ServeTicketResponse, reader: jspb.BinaryReader): ServeTicketResponse;
}

export namespace ServeTicketResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class DiscardTicketResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): DiscardTicketResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): DiscardTicketResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscardTicketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DiscardTicketResponse): DiscardTicketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscardTicketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscardTicketResponse;
    static deserializeBinaryFromReader(message: DiscardTicketResponse, reader: jspb.BinaryReader): DiscardTicketResponse;
}

export namespace DiscardTicketResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ReturnToQueueResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Ticket | undefined;
    setData(value?: Ticket): ReturnToQueueResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ReturnToQueueResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnToQueueResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnToQueueResponse): ReturnToQueueResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnToQueueResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnToQueueResponse;
    static deserializeBinaryFromReader(message: ReturnToQueueResponse, reader: jspb.BinaryReader): ReturnToQueueResponse;
}

export namespace ReturnToQueueResponse {
    export type AsObject = {
        data?: Ticket.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
