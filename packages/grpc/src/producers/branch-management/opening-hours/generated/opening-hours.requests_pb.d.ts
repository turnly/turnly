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

export class BulkOpeningHoursObject extends jspb.Message { 
    getId(): string;
    setId(value: string): BulkOpeningHoursObject;
    getName(): string;
    setName(value: string): BulkOpeningHoursObject;
    getDayOfWeek(): number;
    setDayOfWeek(value: number): BulkOpeningHoursObject;
    getClosedAllDay(): boolean;
    setClosedAllDay(value: boolean): BulkOpeningHoursObject;
    getOpenAllDay(): boolean;
    setOpenAllDay(value: boolean): BulkOpeningHoursObject;
    getOpenHour(): number;
    setOpenHour(value: number): BulkOpeningHoursObject;
    getOpenMinutes(): number;
    setOpenMinutes(value: number): BulkOpeningHoursObject;
    getCloseHour(): number;
    setCloseHour(value: number): BulkOpeningHoursObject;
    getCloseMinutes(): number;
    setCloseMinutes(value: number): BulkOpeningHoursObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkOpeningHoursObject.AsObject;
    static toObject(includeInstance: boolean, msg: BulkOpeningHoursObject): BulkOpeningHoursObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkOpeningHoursObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkOpeningHoursObject;
    static deserializeBinaryFromReader(message: BulkOpeningHoursObject, reader: jspb.BinaryReader): BulkOpeningHoursObject;
}

export namespace BulkOpeningHoursObject {
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

export class BulkRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): BulkRequest;
    clearOpeningHoursList(): void;
    getOpeningHoursList(): Array<BulkOpeningHoursObject>;
    setOpeningHoursList(value: Array<BulkOpeningHoursObject>): BulkRequest;
    addOpeningHours(value?: BulkOpeningHoursObject, index?: number): BulkOpeningHoursObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BulkRequest): BulkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkRequest;
    static deserializeBinaryFromReader(message: BulkRequest, reader: jspb.BinaryReader): BulkRequest;
}

export namespace BulkRequest {
    export type AsObject = {
        locationId: string,
        openingHoursList: Array<BulkOpeningHoursObject.AsObject>,
    }
}
