// package: turnly.branch_management.v1.locations
// file: locations.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Location extends jspb.Message { 
    getId(): string;
    setId(value: string): Location;
    getName(): string;
    setName(value: string): Location;
    getAddress(): string;
    setAddress(value: string): Location;
    getCountry(): string;
    setCountry(value: string): Location;
    getLatitude(): string;
    setLatitude(value: string): Location;
    getLongitude(): string;
    setLongitude(value: string): Location;
    getStopServingBeforeInMinutes(): number;
    setStopServingBeforeInMinutes(value: number): Location;
    getTimezone(): string;
    setTimezone(value: string): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        id: string,
        name: string,
        address: string,
        country: string,
        latitude: string,
        longitude: string,
        stopServingBeforeInMinutes: number,
        timezone: string,
    }
}

export class SearchAvailableLocationsForServingResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Location>;
    setDataList(value: Array<Location>): SearchAvailableLocationsForServingResponse;
    addData(value?: Location, index?: number): Location;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): SearchAvailableLocationsForServingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchAvailableLocationsForServingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchAvailableLocationsForServingResponse): SearchAvailableLocationsForServingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchAvailableLocationsForServingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchAvailableLocationsForServingResponse;
    static deserializeBinaryFromReader(message: SearchAvailableLocationsForServingResponse, reader: jspb.BinaryReader): SearchAvailableLocationsForServingResponse;
}

export namespace SearchAvailableLocationsForServingResponse {
    export type AsObject = {
        dataList: Array<Location.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetLocationResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Location | undefined;
    setData(value?: Location): GetLocationResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetLocationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
    static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
    export type AsObject = {
        data?: Location.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
