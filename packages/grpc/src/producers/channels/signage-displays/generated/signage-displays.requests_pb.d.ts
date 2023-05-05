// package: turnly.channels.v1.signage_displays
// file: signage-displays.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GeneratePairingCodeSignageDisplayRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GeneratePairingCodeSignageDisplayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneratePairingCodeSignageDisplayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeneratePairingCodeSignageDisplayRequest): GeneratePairingCodeSignageDisplayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneratePairingCodeSignageDisplayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneratePairingCodeSignageDisplayRequest;
    static deserializeBinaryFromReader(message: GeneratePairingCodeSignageDisplayRequest, reader: jspb.BinaryReader): GeneratePairingCodeSignageDisplayRequest;
}

export namespace GeneratePairingCodeSignageDisplayRequest {
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

export class GetOneSignageDisplayRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetOneSignageDisplayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOneSignageDisplayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOneSignageDisplayRequest): GetOneSignageDisplayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOneSignageDisplayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOneSignageDisplayRequest;
    static deserializeBinaryFromReader(message: GetOneSignageDisplayRequest, reader: jspb.BinaryReader): GetOneSignageDisplayRequest;
}

export namespace GetOneSignageDisplayRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListSignageDisplaysRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): ListSignageDisplaysRequest;
    getLimit(): number;
    setLimit(value: number): ListSignageDisplaysRequest;
    getOffset(): number;
    setOffset(value: number): ListSignageDisplaysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSignageDisplaysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSignageDisplaysRequest): ListSignageDisplaysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSignageDisplaysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSignageDisplaysRequest;
    static deserializeBinaryFromReader(message: ListSignageDisplaysRequest, reader: jspb.BinaryReader): ListSignageDisplaysRequest;
}

export namespace ListSignageDisplaysRequest {
    export type AsObject = {
        locationId: string,
        limit: number,
        offset: number,
    }
}

export class UpdateSignageDisplayRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateSignageDisplayRequest;
    getName(): string;
    setName(value: string): UpdateSignageDisplayRequest;
    getRefreshTimeUnit(): string;
    setRefreshTimeUnit(value: string): UpdateSignageDisplayRequest;
    getRefreshTimeValue(): number;
    setRefreshTimeValue(value: number): UpdateSignageDisplayRequest;
    getClearTicketsAfter(): string;
    setClearTicketsAfter(value: string): UpdateSignageDisplayRequest;
    clearServiceIdsList(): void;
    getServiceIdsList(): Array<string>;
    setServiceIdsList(value: Array<string>): UpdateSignageDisplayRequest;
    addServiceIds(value: string, index?: number): string;
    getOrder(): string;
    setOrder(value: string): UpdateSignageDisplayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSignageDisplayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSignageDisplayRequest): UpdateSignageDisplayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSignageDisplayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSignageDisplayRequest;
    static deserializeBinaryFromReader(message: UpdateSignageDisplayRequest, reader: jspb.BinaryReader): UpdateSignageDisplayRequest;
}

export namespace UpdateSignageDisplayRequest {
    export type AsObject = {
        id: string,
        name: string,
        refreshTimeUnit: string,
        refreshTimeValue: number,
        clearTicketsAfter: string,
        serviceIdsList: Array<string>,
        order: string,
    }
}
