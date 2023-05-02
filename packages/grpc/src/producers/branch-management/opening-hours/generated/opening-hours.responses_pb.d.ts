// package: turnly.branch_management.v1.opening_hours
// file: opening-hours.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class OpeningHour extends jspb.Message { 
    getId(): string;
    setId(value: string): OpeningHour;
    getName(): string;
    setName(value: string): OpeningHour;
    getDayOfWeek(): number;
    setDayOfWeek(value: number): OpeningHour;
    getClosedAllDay(): boolean;
    setClosedAllDay(value: boolean): OpeningHour;
    getOpenAllDay(): boolean;
    setOpenAllDay(value: boolean): OpeningHour;
    getOpenHour(): number;
    setOpenHour(value: number): OpeningHour;
    getOpenMinutes(): number;
    setOpenMinutes(value: number): OpeningHour;
    getCloseHour(): number;
    setCloseHour(value: number): OpeningHour;
    getCloseMinutes(): number;
    setCloseMinutes(value: number): OpeningHour;
    getLocationId(): string;
    setLocationId(value: string): OpeningHour;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpeningHour.AsObject;
    static toObject(includeInstance: boolean, msg: OpeningHour): OpeningHour.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpeningHour, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpeningHour;
    static deserializeBinaryFromReader(message: OpeningHour, reader: jspb.BinaryReader): OpeningHour;
}

export namespace OpeningHour {
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
        locationId: string,
    }
}

export class ListLocationHoursResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<OpeningHour>;
    setDataList(value: Array<OpeningHour>): ListLocationHoursResponse;
    addData(value?: OpeningHour, index?: number): OpeningHour;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListLocationHoursResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLocationHoursResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLocationHoursResponse): ListLocationHoursResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLocationHoursResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLocationHoursResponse;
    static deserializeBinaryFromReader(message: ListLocationHoursResponse, reader: jspb.BinaryReader): ListLocationHoursResponse;
}

export namespace ListLocationHoursResponse {
    export type AsObject = {
        dataList: Array<OpeningHour.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class CreateResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<OpeningHour>;
    setDataList(value: Array<OpeningHour>): CreateResponse;
    addData(value?: OpeningHour, index?: number): OpeningHour;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        dataList: Array<OpeningHour.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}
