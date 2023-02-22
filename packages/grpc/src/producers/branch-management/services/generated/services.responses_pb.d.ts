// package: turnly.branch_management.v1.services
// file: services.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Service extends jspb.Message { 
    getId(): string;
    setId(value: string): Service;
    getName(): string;
    setName(value: string): Service;
    getDescription(): string;
    setDescription(value: string): Service;
    getLocationId(): string;
    setLocationId(value: string): Service;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        locationId: string,
    }
}

export class GetServiceResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Service | undefined;
    setData(value?: Service): GetServiceResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceResponse): GetServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceResponse;
    static deserializeBinaryFromReader(message: GetServiceResponse, reader: jspb.BinaryReader): GetServiceResponse;
}

export namespace GetServiceResponse {
    export type AsObject = {
        data?: Service.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ListServicesOfOneLocationResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Service>;
    setDataList(value: Array<Service>): ListServicesOfOneLocationResponse;
    addData(value?: Service, index?: number): Service;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListServicesOfOneLocationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServicesOfOneLocationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServicesOfOneLocationResponse): ListServicesOfOneLocationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServicesOfOneLocationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServicesOfOneLocationResponse;
    static deserializeBinaryFromReader(message: ListServicesOfOneLocationResponse, reader: jspb.BinaryReader): ListServicesOfOneLocationResponse;
}

export namespace ListServicesOfOneLocationResponse {
    export type AsObject = {
        dataList: Array<Service.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}
