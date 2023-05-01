// package: turnly.business_management.v1.organizations
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
    getPlan(): string;
    setPlan(value: string): Organization;
    getBrandingLogo(): string;
    setBrandingLogo(value: string): Organization;
    getBrandingPrimaryColor(): string;
    setBrandingPrimaryColor(value: string): Organization;
    getBrandingSecondaryColor(): string;
    setBrandingSecondaryColor(value: string): Organization;
    getBrandingDesignType(): string;
    setBrandingDesignType(value: string): Organization;
    getBrandingPrimaryBackground(): string;
    setBrandingPrimaryBackground(value: string): Organization;
    getBrandingSecondaryBackground(): string;
    setBrandingSecondaryBackground(value: string): Organization;
    getDisabledTelemetry(): boolean;
    setDisabledTelemetry(value: boolean): Organization;

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
        plan: string,
        brandingLogo: string,
        brandingPrimaryColor: string,
        brandingSecondaryColor: string,
        brandingDesignType: string,
        brandingPrimaryBackground: string,
        brandingSecondaryBackground: string,
        disabledTelemetry: boolean,
    }
}

export class GetOrganizationResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Organization | undefined;
    setData(value?: Organization): GetOrganizationResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetOrganizationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
    static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
    export type AsObject = {
        data?: Organization.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
