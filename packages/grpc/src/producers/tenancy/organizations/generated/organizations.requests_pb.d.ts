// package: turnly.tenancy.v1.organizations
// file: organizations.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListMyOrganizationsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): ListMyOrganizationsRequest;
    getOffset(): number;
    setOffset(value: number): ListMyOrganizationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMyOrganizationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMyOrganizationsRequest): ListMyOrganizationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMyOrganizationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMyOrganizationsRequest;
    static deserializeBinaryFromReader(message: ListMyOrganizationsRequest, reader: jspb.BinaryReader): ListMyOrganizationsRequest;
}

export namespace ListMyOrganizationsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class GetOrganizationBySubdomainRequest extends jspb.Message { 
    getSubdomain(): string;
    setSubdomain(value: string): GetOrganizationBySubdomainRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationBySubdomainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationBySubdomainRequest): GetOrganizationBySubdomainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationBySubdomainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationBySubdomainRequest;
    static deserializeBinaryFromReader(message: GetOrganizationBySubdomainRequest, reader: jspb.BinaryReader): GetOrganizationBySubdomainRequest;
}

export namespace GetOrganizationBySubdomainRequest {
    export type AsObject = {
        subdomain: string,
    }
}
