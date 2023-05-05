// package: turnly.channels.v1.devices
// file: devices.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GeneratePairingCodeDeviceRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GeneratePairingCodeDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneratePairingCodeDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeneratePairingCodeDeviceRequest): GeneratePairingCodeDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneratePairingCodeDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneratePairingCodeDeviceRequest;
    static deserializeBinaryFromReader(message: GeneratePairingCodeDeviceRequest, reader: jspb.BinaryReader): GeneratePairingCodeDeviceRequest;
}

export namespace GeneratePairingCodeDeviceRequest {
    export type AsObject = {
        name: string,
    }
}

export class PairToLocationDeviceRequest extends jspb.Message { 
    getPairingCode(): string;
    setPairingCode(value: string): PairToLocationDeviceRequest;
    getLocationId(): string;
    setLocationId(value: string): PairToLocationDeviceRequest;
    getType(): string;
    setType(value: string): PairToLocationDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairToLocationDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PairToLocationDeviceRequest): PairToLocationDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairToLocationDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairToLocationDeviceRequest;
    static deserializeBinaryFromReader(message: PairToLocationDeviceRequest, reader: jspb.BinaryReader): PairToLocationDeviceRequest;
}

export namespace PairToLocationDeviceRequest {
    export type AsObject = {
        pairingCode: string,
        locationId: string,
        type: string,
    }
}

export class UnpairDeviceRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UnpairDeviceRequest;
    getLocationId(): string;
    setLocationId(value: string): UnpairDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnpairDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnpairDeviceRequest): UnpairDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnpairDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnpairDeviceRequest;
    static deserializeBinaryFromReader(message: UnpairDeviceRequest, reader: jspb.BinaryReader): UnpairDeviceRequest;
}

export namespace UnpairDeviceRequest {
    export type AsObject = {
        id: string,
        locationId: string,
    }
}

export class GetOneDeviceRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetOneDeviceRequest;
    getLocationId(): string;
    setLocationId(value: string): GetOneDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOneDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOneDeviceRequest): GetOneDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOneDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOneDeviceRequest;
    static deserializeBinaryFromReader(message: GetOneDeviceRequest, reader: jspb.BinaryReader): GetOneDeviceRequest;
}

export namespace GetOneDeviceRequest {
    export type AsObject = {
        id: string,
        locationId: string,
    }
}

export class ListDevicesRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): ListDevicesRequest;
    getLimit(): number;
    setLimit(value: number): ListDevicesRequest;
    getOffset(): number;
    setOffset(value: number): ListDevicesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
    static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
    export type AsObject = {
        locationId: string,
        limit: number,
        offset: number,
    }
}
