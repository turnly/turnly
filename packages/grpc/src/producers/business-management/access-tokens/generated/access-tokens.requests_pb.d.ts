// package: turnly.business_management.v1.access_tokens
// file: access-tokens.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateAccessTokenRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateAccessTokenRequest;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): CreateAccessTokenRequest;
    addScopes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessTokenRequest): CreateAccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessTokenRequest;
    static deserializeBinaryFromReader(message: CreateAccessTokenRequest, reader: jspb.BinaryReader): CreateAccessTokenRequest;
}

export namespace CreateAccessTokenRequest {
    export type AsObject = {
        name: string,
        scopesList: Array<string>,
    }
}

export class ExchangeAccessTokenRequest extends jspb.Message { 
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): ExchangeAccessTokenRequest;
    addScopes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeAccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeAccessTokenRequest): ExchangeAccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeAccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeAccessTokenRequest;
    static deserializeBinaryFromReader(message: ExchangeAccessTokenRequest, reader: jspb.BinaryReader): ExchangeAccessTokenRequest;
}

export namespace ExchangeAccessTokenRequest {
    export type AsObject = {
        scopesList: Array<string>,
    }
}

export class GetAccessTokenRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GetAccessTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccessTokenRequest): GetAccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccessTokenRequest;
    static deserializeBinaryFromReader(message: GetAccessTokenRequest, reader: jspb.BinaryReader): GetAccessTokenRequest;
}

export namespace GetAccessTokenRequest {
    export type AsObject = {
        token: string,
    }
}
