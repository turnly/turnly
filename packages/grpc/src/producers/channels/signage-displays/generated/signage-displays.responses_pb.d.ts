// package: turnly.channels.v1.signage_displays
// file: signage-displays.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class SignageDisplay extends jspb.Message { 
    getId(): string;
    setId(value: string): SignageDisplay;
    getName(): string;
    setName(value: string): SignageDisplay;
    getDeviceId(): string;
    setDeviceId(value: string): SignageDisplay;
    getRefreshTimeUnit(): string;
    setRefreshTimeUnit(value: string): SignageDisplay;
    getRefreshTimeValue(): number;
    setRefreshTimeValue(value: number): SignageDisplay;
    getLocationId(): string;
    setLocationId(value: string): SignageDisplay;
    getOrganizationId(): string;
    setOrganizationId(value: string): SignageDisplay;
    getClearTicketsAfter(): string;
    setClearTicketsAfter(value: string): SignageDisplay;
    clearServiceIdsList(): void;
    getServiceIdsList(): Array<string>;
    setServiceIdsList(value: Array<string>): SignageDisplay;
    addServiceIds(value: string, index?: number): string;
    getOrder(): string;
    setOrder(value: string): SignageDisplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignageDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: SignageDisplay): SignageDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignageDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignageDisplay;
    static deserializeBinaryFromReader(message: SignageDisplay, reader: jspb.BinaryReader): SignageDisplay;
}

export namespace SignageDisplay {
    export type AsObject = {
        id: string,
        name: string,
        deviceId: string,
        refreshTimeUnit: string,
        refreshTimeValue: number,
        locationId: string,
        organizationId: string,
        clearTicketsAfter: string,
        serviceIdsList: Array<string>,
        order: string,
    }
}

export class GetPairingCodeSignageDisplayResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): SignageDisplay | undefined;
    setData(value?: SignageDisplay): GetPairingCodeSignageDisplayResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetPairingCodeSignageDisplayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPairingCodeSignageDisplayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPairingCodeSignageDisplayResponse): GetPairingCodeSignageDisplayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPairingCodeSignageDisplayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPairingCodeSignageDisplayResponse;
    static deserializeBinaryFromReader(message: GetPairingCodeSignageDisplayResponse, reader: jspb.BinaryReader): GetPairingCodeSignageDisplayResponse;
}

export namespace GetPairingCodeSignageDisplayResponse {
    export type AsObject = {
        data?: SignageDisplay.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class PairToLocationSignageDisplayResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): SignageDisplay | undefined;
    setData(value?: SignageDisplay): PairToLocationSignageDisplayResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): PairToLocationSignageDisplayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairToLocationSignageDisplayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PairToLocationSignageDisplayResponse): PairToLocationSignageDisplayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairToLocationSignageDisplayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairToLocationSignageDisplayResponse;
    static deserializeBinaryFromReader(message: PairToLocationSignageDisplayResponse, reader: jspb.BinaryReader): PairToLocationSignageDisplayResponse;
}

export namespace PairToLocationSignageDisplayResponse {
    export type AsObject = {
        data?: SignageDisplay.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class UnpairSignageDisplayResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): SignageDisplay | undefined;
    setData(value?: SignageDisplay): UnpairSignageDisplayResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): UnpairSignageDisplayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnpairSignageDisplayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnpairSignageDisplayResponse): UnpairSignageDisplayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnpairSignageDisplayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnpairSignageDisplayResponse;
    static deserializeBinaryFromReader(message: UnpairSignageDisplayResponse, reader: jspb.BinaryReader): UnpairSignageDisplayResponse;
}

export namespace UnpairSignageDisplayResponse {
    export type AsObject = {
        data?: SignageDisplay.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
