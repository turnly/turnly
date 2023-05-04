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

export class SaveOpeningHoursObject extends jspb.Message { 
    getId(): string;
    setId(value: string): SaveOpeningHoursObject;
    getDayOfWeek(): number;
    setDayOfWeek(value: number): SaveOpeningHoursObject;
    getClosedAllDay(): boolean;
    setClosedAllDay(value: boolean): SaveOpeningHoursObject;
    getOpenAllDay(): boolean;
    setOpenAllDay(value: boolean): SaveOpeningHoursObject;
    getOpenHour(): number;
    setOpenHour(value: number): SaveOpeningHoursObject;
    getOpenMinutes(): number;
    setOpenMinutes(value: number): SaveOpeningHoursObject;
    getCloseHour(): number;
    setCloseHour(value: number): SaveOpeningHoursObject;
    getCloseMinutes(): number;
    setCloseMinutes(value: number): SaveOpeningHoursObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOpeningHoursObject.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOpeningHoursObject): SaveOpeningHoursObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOpeningHoursObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOpeningHoursObject;
    static deserializeBinaryFromReader(message: SaveOpeningHoursObject, reader: jspb.BinaryReader): SaveOpeningHoursObject;
}

export namespace SaveOpeningHoursObject {
    export type AsObject = {
        id: string,
        dayOfWeek: number,
        closedAllDay: boolean,
        openAllDay: boolean,
        openHour: number,
        openMinutes: number,
        closeHour: number,
        closeMinutes: number,
    }
}

export class SaveOpeningHoursRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): SaveOpeningHoursRequest;
    clearOpeningHoursList(): void;
    getOpeningHoursList(): Array<SaveOpeningHoursObject>;
    setOpeningHoursList(value: Array<SaveOpeningHoursObject>): SaveOpeningHoursRequest;
    addOpeningHours(value?: SaveOpeningHoursObject, index?: number): SaveOpeningHoursObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOpeningHoursRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOpeningHoursRequest): SaveOpeningHoursRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOpeningHoursRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOpeningHoursRequest;
    static deserializeBinaryFromReader(message: SaveOpeningHoursRequest, reader: jspb.BinaryReader): SaveOpeningHoursRequest;
}

export namespace SaveOpeningHoursRequest {
    export type AsObject = {
        locationId: string,
        openingHoursList: Array<SaveOpeningHoursObject.AsObject>,
    }
}
