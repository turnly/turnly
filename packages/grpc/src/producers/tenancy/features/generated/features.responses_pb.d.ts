// package: turnly.tenancy.v1.features
// file: features.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Feature extends jspb.Message { 
    getId(): string;
    setId(value: string): Feature;
    getName(): string;
    setName(value: string): Feature;
    getQuantity(): number;
    setQuantity(value: number): Feature;
    getUnit(): string;
    setUnit(value: string): Feature;
    getKey(): string;
    setKey(value: string): Feature;
    getType(): string;
    setType(value: string): Feature;
    clearMetadataList(): void;
    getMetadataList(): Array<common_pb.Extra>;
    setMetadataList(value: Array<common_pb.Extra>): Feature;
    addMetadata(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        id: string,
        name: string,
        quantity: number,
        unit: string,
        key: string,
        type: string,
        metadataList: Array<common_pb.Extra.AsObject>,
    }
}

export class BulkFeaturesResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Feature>;
    setDataList(value: Array<Feature>): BulkFeaturesResponse;
    addData(value?: Feature, index?: number): Feature;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): BulkFeaturesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkFeaturesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BulkFeaturesResponse): BulkFeaturesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkFeaturesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkFeaturesResponse;
    static deserializeBinaryFromReader(message: BulkFeaturesResponse, reader: jspb.BinaryReader): BulkFeaturesResponse;
}

export namespace BulkFeaturesResponse {
    export type AsObject = {
        dataList: Array<Feature.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class DeleteFeatureResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Feature | undefined;
    setData(value?: Feature): DeleteFeatureResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): DeleteFeatureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFeatureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFeatureResponse): DeleteFeatureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFeatureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFeatureResponse;
    static deserializeBinaryFromReader(message: DeleteFeatureResponse, reader: jspb.BinaryReader): DeleteFeatureResponse;
}

export namespace DeleteFeatureResponse {
    export type AsObject = {
        data?: Feature.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ListFeaturesResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Feature>;
    setDataList(value: Array<Feature>): ListFeaturesResponse;
    addData(value?: Feature, index?: number): Feature;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListFeaturesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFeaturesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFeaturesResponse): ListFeaturesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFeaturesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFeaturesResponse;
    static deserializeBinaryFromReader(message: ListFeaturesResponse, reader: jspb.BinaryReader): ListFeaturesResponse;
}

export namespace ListFeaturesResponse {
    export type AsObject = {
        dataList: Array<Feature.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}
