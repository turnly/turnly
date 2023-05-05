// package: turnly.tenancy.v1.features
// file: features.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class BulkFeaturesObject extends jspb.Message { 
    getName(): string;
    setName(value: string): BulkFeaturesObject;
    getQuantity(): number;
    setQuantity(value: number): BulkFeaturesObject;
    getUnit(): string;
    setUnit(value: string): BulkFeaturesObject;
    getKey(): string;
    setKey(value: string): BulkFeaturesObject;
    getType(): string;
    setType(value: string): BulkFeaturesObject;
    clearMetadataList(): void;
    getMetadataList(): Array<common_pb.Extra>;
    setMetadataList(value: Array<common_pb.Extra>): BulkFeaturesObject;
    addMetadata(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkFeaturesObject.AsObject;
    static toObject(includeInstance: boolean, msg: BulkFeaturesObject): BulkFeaturesObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkFeaturesObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkFeaturesObject;
    static deserializeBinaryFromReader(message: BulkFeaturesObject, reader: jspb.BinaryReader): BulkFeaturesObject;
}

export namespace BulkFeaturesObject {
    export type AsObject = {
        name: string,
        quantity: number,
        unit: string,
        key: string,
        type: string,
        metadataList: Array<common_pb.Extra.AsObject>,
    }
}

export class BulkFeaturesRequest extends jspb.Message { 
    clearFeaturesList(): void;
    getFeaturesList(): Array<BulkFeaturesObject>;
    setFeaturesList(value: Array<BulkFeaturesObject>): BulkFeaturesRequest;
    addFeatures(value?: BulkFeaturesObject, index?: number): BulkFeaturesObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkFeaturesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BulkFeaturesRequest): BulkFeaturesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkFeaturesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkFeaturesRequest;
    static deserializeBinaryFromReader(message: BulkFeaturesRequest, reader: jspb.BinaryReader): BulkFeaturesRequest;
}

export namespace BulkFeaturesRequest {
    export type AsObject = {
        featuresList: Array<BulkFeaturesObject.AsObject>,
    }
}

export class DeleteFeatureRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): DeleteFeatureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFeatureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFeatureRequest): DeleteFeatureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFeatureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFeatureRequest;
    static deserializeBinaryFromReader(message: DeleteFeatureRequest, reader: jspb.BinaryReader): DeleteFeatureRequest;
}

export namespace DeleteFeatureRequest {
    export type AsObject = {
        key: string,
    }
}

export class ListFeaturesRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): ListFeaturesRequest;
    getOffset(): number;
    setOffset(value: number): ListFeaturesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFeaturesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFeaturesRequest): ListFeaturesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFeaturesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFeaturesRequest;
    static deserializeBinaryFromReader(message: ListFeaturesRequest, reader: jspb.BinaryReader): ListFeaturesRequest;
}

export namespace ListFeaturesRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}
