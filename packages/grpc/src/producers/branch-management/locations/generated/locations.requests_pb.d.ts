// package: turnly.branch_management.v1.locations
// file: locations.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SearchAvailableLocationsForServingRequest extends jspb.Message { 
    getSearchQuery(): string;
    setSearchQuery(value: string): SearchAvailableLocationsForServingRequest;
    getCountry(): string;
    setCountry(value: string): SearchAvailableLocationsForServingRequest;
    getLatitude(): string;
    setLatitude(value: string): SearchAvailableLocationsForServingRequest;
    getLongitude(): string;
    setLongitude(value: string): SearchAvailableLocationsForServingRequest;
    getLimit(): number;
    setLimit(value: number): SearchAvailableLocationsForServingRequest;
    getOffset(): number;
    setOffset(value: number): SearchAvailableLocationsForServingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchAvailableLocationsForServingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchAvailableLocationsForServingRequest): SearchAvailableLocationsForServingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchAvailableLocationsForServingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchAvailableLocationsForServingRequest;
    static deserializeBinaryFromReader(message: SearchAvailableLocationsForServingRequest, reader: jspb.BinaryReader): SearchAvailableLocationsForServingRequest;
}

export namespace SearchAvailableLocationsForServingRequest {
    export type AsObject = {
        searchQuery: string,
        country: string,
        latitude: string,
        longitude: string,
        limit: number,
        offset: number,
    }
}

export class GetLocationRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetLocationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
    static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetLocationReadyForServingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetLocationReadyForServingRequest;
    getServiceId(): string;
    setServiceId(value: string): GetLocationReadyForServingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationReadyForServingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationReadyForServingRequest): GetLocationReadyForServingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationReadyForServingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationReadyForServingRequest;
    static deserializeBinaryFromReader(message: GetLocationReadyForServingRequest, reader: jspb.BinaryReader): GetLocationReadyForServingRequest;
}

export namespace GetLocationReadyForServingRequest {
    export type AsObject = {
        id: string,
        serviceId: string,
    }
}
