// package: turnly.branch_management.v1.opening_hours
// file: opening-hours.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListLocationHoursRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): ListLocationHoursRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLocationHoursRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLocationHoursRequest): ListLocationHoursRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLocationHoursRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLocationHoursRequest;
    static deserializeBinaryFromReader(message: ListLocationHoursRequest, reader: jspb.BinaryReader): ListLocationHoursRequest;
}

export namespace ListLocationHoursRequest {
    export type AsObject = {
        locationId: string,
    }
}

export class CreateOpeningHoursObject extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateOpeningHoursObject;
    getName(): string;
    setName(value: string): CreateOpeningHoursObject;
    getDayOfWeek(): number;
    setDayOfWeek(value: number): CreateOpeningHoursObject;
    getClosedAllDay(): boolean;
    setClosedAllDay(value: boolean): CreateOpeningHoursObject;
    getOpenAllDay(): boolean;
    setOpenAllDay(value: boolean): CreateOpeningHoursObject;
    getOpenHour(): number;
    setOpenHour(value: number): CreateOpeningHoursObject;
    getOpenMinutes(): number;
    setOpenMinutes(value: number): CreateOpeningHoursObject;
    getCloseHour(): number;
    setCloseHour(value: number): CreateOpeningHoursObject;
    getCloseMinutes(): number;
    setCloseMinutes(value: number): CreateOpeningHoursObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOpeningHoursObject.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOpeningHoursObject): CreateOpeningHoursObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOpeningHoursObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOpeningHoursObject;
    static deserializeBinaryFromReader(message: CreateOpeningHoursObject, reader: jspb.BinaryReader): CreateOpeningHoursObject;
}

export namespace CreateOpeningHoursObject {
    export type AsObject = {
        id: string,
        name: string,
        dayOfWeek: number,
        closedAllDay: boolean,
        openAllDay: boolean,
        openHour: number,
        openMinutes: number,
        closeHour: number,
        closeMinutes: number,
    }
}

export class CreateRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): CreateRequest;
    clearOpeningHoursList(): void;
    getOpeningHoursList(): Array<CreateOpeningHoursObject>;
    setOpeningHoursList(value: Array<CreateOpeningHoursObject>): CreateRequest;
    addOpeningHours(value?: CreateOpeningHoursObject, index?: number): CreateOpeningHoursObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        locationId: string,
        openingHoursList: Array<CreateOpeningHoursObject.AsObject>,
    }
}
