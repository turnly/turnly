// package: turnly.tenancy.v1.organizations
// file: organizations.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Organization extends jspb.Message { 
    getId(): string;
    setId(value: string): Organization;
    getName(): string;
    setName(value: string): Organization;
    getStatus(): string;
    setStatus(value: string): Organization;
    getSubdomain(): string;
    setSubdomain(value: string): Organization;
    clearMetadataList(): void;
    getMetadataList(): Array<common_pb.Extra>;
    setMetadataList(value: Array<common_pb.Extra>): Organization;
    addMetadata(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Organization.AsObject;
    static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Organization;
    static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
    export type AsObject = {
        id: string,
        name: string,
        status: string,
        subdomain: string,
        metadataList: Array<common_pb.Extra.AsObject>,
    }
}

export class ListMyOrganizationsResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Organization>;
    setDataList(value: Array<Organization>): ListMyOrganizationsResponse;
    addData(value?: Organization, index?: number): Organization;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListMyOrganizationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMyOrganizationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMyOrganizationsResponse): ListMyOrganizationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMyOrganizationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMyOrganizationsResponse;
    static deserializeBinaryFromReader(message: ListMyOrganizationsResponse, reader: jspb.BinaryReader): ListMyOrganizationsResponse;
}

export namespace ListMyOrganizationsResponse {
    export type AsObject = {
        dataList: Array<Organization.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetOrganizationBySubdomainResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Organization | undefined;
    setData(value?: Organization): GetOrganizationBySubdomainResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetOrganizationBySubdomainResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationBySubdomainResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationBySubdomainResponse): GetOrganizationBySubdomainResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationBySubdomainResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationBySubdomainResponse;
    static deserializeBinaryFromReader(message: GetOrganizationBySubdomainResponse, reader: jspb.BinaryReader): GetOrganizationBySubdomainResponse;
}

export namespace GetOrganizationBySubdomainResponse {
    export type AsObject = {
        data?: Organization.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
