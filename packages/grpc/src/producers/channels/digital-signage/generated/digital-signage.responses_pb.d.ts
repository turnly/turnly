// package: turnly.channels.v1.digital_signage
// file: digital-signage.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class DigitalSignageEntity extends jspb.Message { 
    getId(): string;
    setId(value: string): DigitalSignageEntity;
    getName(): string;
    setName(value: string): DigitalSignageEntity;
    getDeviceId(): string;
    setDeviceId(value: string): DigitalSignageEntity;
    getRefreshTimeUnit(): string;
    setRefreshTimeUnit(value: string): DigitalSignageEntity;
    getRefreshTimeValue(): number;
    setRefreshTimeValue(value: number): DigitalSignageEntity;
    getLocationId(): string;
    setLocationId(value: string): DigitalSignageEntity;
    getOrganizationId(): string;
    setOrganizationId(value: string): DigitalSignageEntity;
    getClearTicketsAfter(): string;
    setClearTicketsAfter(value: string): DigitalSignageEntity;
    clearServiceIdsList(): void;
    getServiceIdsList(): Array<string>;
    setServiceIdsList(value: Array<string>): DigitalSignageEntity;
    addServiceIds(value: string, index?: number): string;
    getDisplayOrder(): string;
    setDisplayOrder(value: string): DigitalSignageEntity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DigitalSignageEntity.AsObject;
    static toObject(includeInstance: boolean, msg: DigitalSignageEntity): DigitalSignageEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DigitalSignageEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DigitalSignageEntity;
    static deserializeBinaryFromReader(message: DigitalSignageEntity, reader: jspb.BinaryReader): DigitalSignageEntity;
}

export namespace DigitalSignageEntity {
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
        displayOrder: string,
    }
}

export class GetPairingCodeDigitalSignageResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): DigitalSignageEntity | undefined;
    setData(value?: DigitalSignageEntity): GetPairingCodeDigitalSignageResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetPairingCodeDigitalSignageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPairingCodeDigitalSignageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPairingCodeDigitalSignageResponse): GetPairingCodeDigitalSignageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPairingCodeDigitalSignageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPairingCodeDigitalSignageResponse;
    static deserializeBinaryFromReader(message: GetPairingCodeDigitalSignageResponse, reader: jspb.BinaryReader): GetPairingCodeDigitalSignageResponse;
}

export namespace GetPairingCodeDigitalSignageResponse {
    export type AsObject = {
        data?: DigitalSignageEntity.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class PairToLocationDigitalSignageResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): DigitalSignageEntity | undefined;
    setData(value?: DigitalSignageEntity): PairToLocationDigitalSignageResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): PairToLocationDigitalSignageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairToLocationDigitalSignageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PairToLocationDigitalSignageResponse): PairToLocationDigitalSignageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairToLocationDigitalSignageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairToLocationDigitalSignageResponse;
    static deserializeBinaryFromReader(message: PairToLocationDigitalSignageResponse, reader: jspb.BinaryReader): PairToLocationDigitalSignageResponse;
}

export namespace PairToLocationDigitalSignageResponse {
    export type AsObject = {
        data?: DigitalSignageEntity.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
