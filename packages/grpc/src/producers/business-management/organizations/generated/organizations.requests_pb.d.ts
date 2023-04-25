// package: turnly.business_owners.v1.organizations
// file: organizations.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetOrganizationRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetOrganizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
    static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
    export type AsObject = {
        id: string,
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
