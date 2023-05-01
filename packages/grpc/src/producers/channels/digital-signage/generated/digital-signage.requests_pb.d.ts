// package: turnly.channels.v1.digital_signage
// file: digital-signage.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetPairingCodeDigitalSignageRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetPairingCodeDigitalSignageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPairingCodeDigitalSignageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPairingCodeDigitalSignageRequest): GetPairingCodeDigitalSignageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPairingCodeDigitalSignageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPairingCodeDigitalSignageRequest;
    static deserializeBinaryFromReader(message: GetPairingCodeDigitalSignageRequest, reader: jspb.BinaryReader): GetPairingCodeDigitalSignageRequest;
}

export namespace GetPairingCodeDigitalSignageRequest {
    export type AsObject = {
        name: string,
    }
}

export class PairToLocationDigitalSignageRequest extends jspb.Message { 
    getPairingCode(): string;
    setPairingCode(value: string): PairToLocationDigitalSignageRequest;
    getLocationId(): string;
    setLocationId(value: string): PairToLocationDigitalSignageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairToLocationDigitalSignageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PairToLocationDigitalSignageRequest): PairToLocationDigitalSignageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairToLocationDigitalSignageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairToLocationDigitalSignageRequest;
    static deserializeBinaryFromReader(message: PairToLocationDigitalSignageRequest, reader: jspb.BinaryReader): PairToLocationDigitalSignageRequest;
}

export namespace PairToLocationDigitalSignageRequest {
    export type AsObject = {
        pairingCode: string,
        locationId: string,
    }
}
