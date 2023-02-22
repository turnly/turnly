// package: turnly.branch_management.v1.services
// file: services.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetServiceRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
    static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListServicesOfOneLocationRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): ListServicesOfOneLocationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServicesOfOneLocationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServicesOfOneLocationRequest): ListServicesOfOneLocationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServicesOfOneLocationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServicesOfOneLocationRequest;
    static deserializeBinaryFromReader(message: ListServicesOfOneLocationRequest, reader: jspb.BinaryReader): ListServicesOfOneLocationRequest;
}

export namespace ListServicesOfOneLocationRequest {
    export type AsObject = {
        locationId: string,
    }
}
