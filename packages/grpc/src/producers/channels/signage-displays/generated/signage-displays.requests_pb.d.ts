// package: turnly.channels.v1.signage_displays
// file: signage-displays.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetPairingCodeSignageDisplayRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetPairingCodeSignageDisplayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPairingCodeSignageDisplayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPairingCodeSignageDisplayRequest): GetPairingCodeSignageDisplayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPairingCodeSignageDisplayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPairingCodeSignageDisplayRequest;
    static deserializeBinaryFromReader(message: GetPairingCodeSignageDisplayRequest, reader: jspb.BinaryReader): GetPairingCodeSignageDisplayRequest;
}

export namespace GetPairingCodeSignageDisplayRequest {
    export type AsObject = {
        name: string,
    }
}

export class PairToLocationSignageDisplayRequest extends jspb.Message { 
    getPairingCode(): string;
    setPairingCode(value: string): PairToLocationSignageDisplayRequest;
    getLocationId(): string;
    setLocationId(value: string): PairToLocationSignageDisplayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairToLocationSignageDisplayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PairToLocationSignageDisplayRequest): PairToLocationSignageDisplayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairToLocationSignageDisplayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairToLocationSignageDisplayRequest;
    static deserializeBinaryFromReader(message: PairToLocationSignageDisplayRequest, reader: jspb.BinaryReader): PairToLocationSignageDisplayRequest;
}

export namespace PairToLocationSignageDisplayRequest {
    export type AsObject = {
        pairingCode: string,
        locationId: string,
    }
}

export class UnpairSignageDisplayRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UnpairSignageDisplayRequest;
    getLocationId(): string;
    setLocationId(value: string): UnpairSignageDisplayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnpairSignageDisplayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnpairSignageDisplayRequest): UnpairSignageDisplayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnpairSignageDisplayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnpairSignageDisplayRequest;
    static deserializeBinaryFromReader(message: UnpairSignageDisplayRequest, reader: jspb.BinaryReader): UnpairSignageDisplayRequest;
}

export namespace UnpairSignageDisplayRequest {
    export type AsObject = {
        id: string,
        locationId: string,
    }
}
