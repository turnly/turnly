// package: turnly.channels.v1.devices
// file: devices.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Device extends jspb.Message { 
    getId(): string;
    setId(value: string): Device;
    getName(): string;
    setName(value: string): Device;
    getType(): string;
    setType(value: string): Device;
    getStatus(): string;
    setStatus(value: string): Device;
    getLocationId(): string;
    setLocationId(value: string): Device;
    clearMetadataList(): void;
    getMetadataList(): Array<common_pb.Extra>;
    setMetadataList(value: Array<common_pb.Extra>): Device;
    addMetadata(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Device.AsObject;
    static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Device;
    static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        status: string,
        locationId: string,
        metadataList: Array<common_pb.Extra.AsObject>,
    }
}

export class GeneratePairingCodeDeviceResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Device | undefined;
    setData(value?: Device): GeneratePairingCodeDeviceResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GeneratePairingCodeDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneratePairingCodeDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeneratePairingCodeDeviceResponse): GeneratePairingCodeDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneratePairingCodeDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneratePairingCodeDeviceResponse;
    static deserializeBinaryFromReader(message: GeneratePairingCodeDeviceResponse, reader: jspb.BinaryReader): GeneratePairingCodeDeviceResponse;
}

export namespace GeneratePairingCodeDeviceResponse {
    export type AsObject = {
        data?: Device.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class PairToLocationDeviceResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Device | undefined;
    setData(value?: Device): PairToLocationDeviceResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): PairToLocationDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PairToLocationDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PairToLocationDeviceResponse): PairToLocationDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PairToLocationDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PairToLocationDeviceResponse;
    static deserializeBinaryFromReader(message: PairToLocationDeviceResponse, reader: jspb.BinaryReader): PairToLocationDeviceResponse;
}

export namespace PairToLocationDeviceResponse {
    export type AsObject = {
        data?: Device.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class UnpairDeviceResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Device | undefined;
    setData(value?: Device): UnpairDeviceResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): UnpairDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnpairDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnpairDeviceResponse): UnpairDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnpairDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnpairDeviceResponse;
    static deserializeBinaryFromReader(message: UnpairDeviceResponse, reader: jspb.BinaryReader): UnpairDeviceResponse;
}

export namespace UnpairDeviceResponse {
    export type AsObject = {
        data?: Device.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetOneDeviceResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Device | undefined;
    setData(value?: Device): GetOneDeviceResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetOneDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOneDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOneDeviceResponse): GetOneDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOneDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOneDeviceResponse;
    static deserializeBinaryFromReader(message: GetOneDeviceResponse, reader: jspb.BinaryReader): GetOneDeviceResponse;
}

export namespace GetOneDeviceResponse {
    export type AsObject = {
        data?: Device.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ListDevicesResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Device>;
    setDataList(value: Array<Device>): ListDevicesResponse;
    addData(value?: Device, index?: number): Device;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListDevicesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
    static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
    export type AsObject = {
        dataList: Array<Device.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}
