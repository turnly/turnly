// package: turnly.business_management.v1.tokens
// file: tokens.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateTokenRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateTokenRequest;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): CreateTokenRequest;
    addScopes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTokenRequest): CreateTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTokenRequest;
    static deserializeBinaryFromReader(message: CreateTokenRequest, reader: jspb.BinaryReader): CreateTokenRequest;
}

export namespace CreateTokenRequest {
    export type AsObject = {
        name: string,
        scopesList: Array<string>,
    }
}

export class ExchangeTokenRequest extends jspb.Message { 
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): ExchangeTokenRequest;
    addScopes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeTokenRequest): ExchangeTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeTokenRequest;
    static deserializeBinaryFromReader(message: ExchangeTokenRequest, reader: jspb.BinaryReader): ExchangeTokenRequest;
}

export namespace ExchangeTokenRequest {
    export type AsObject = {
        scopesList: Array<string>,
    }
}

export class GetTokenRequest extends jspb.Message { 
    getSecret(): string;
    setSecret(value: string): GetTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenRequest): GetTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenRequest;
    static deserializeBinaryFromReader(message: GetTokenRequest, reader: jspb.BinaryReader): GetTokenRequest;
}

export namespace GetTokenRequest {
    export type AsObject = {
        secret: string,
    }
}
