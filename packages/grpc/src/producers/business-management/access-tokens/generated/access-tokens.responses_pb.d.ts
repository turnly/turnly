// package: turnly.business_management.v1.access_tokens
// file: access-tokens.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class AccessToken extends jspb.Message { 
    getId(): string;
    setId(value: string): AccessToken;
    getName(): string;
    setName(value: string): AccessToken;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): AccessToken;
    addScopes(value: string, index?: number): string;
    getCreateByType(): string;
    setCreateByType(value: string): AccessToken;
    getCreateById(): string;
    setCreateById(value: string): AccessToken;
    getPrefix(): string;
    setPrefix(value: string): AccessToken;
    getToken(): string;
    setToken(value: string): AccessToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessToken.AsObject;
    static toObject(includeInstance: boolean, msg: AccessToken): AccessToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessToken;
    static deserializeBinaryFromReader(message: AccessToken, reader: jspb.BinaryReader): AccessToken;
}

export namespace AccessToken {
    export type AsObject = {
        id: string,
        name: string,
        scopesList: Array<string>,
        createByType: string,
        createById: string,
        prefix: string,
        token: string,
    }
}

export class CreateAccessTokenResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): AccessToken | undefined;
    setData(value?: AccessToken): CreateAccessTokenResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CreateAccessTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessTokenResponse): CreateAccessTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessTokenResponse;
    static deserializeBinaryFromReader(message: CreateAccessTokenResponse, reader: jspb.BinaryReader): CreateAccessTokenResponse;
}

export namespace CreateAccessTokenResponse {
    export type AsObject = {
        data?: AccessToken.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ExchangeAccessTokenResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): AccessToken | undefined;
    setData(value?: AccessToken): ExchangeAccessTokenResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ExchangeAccessTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeAccessTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeAccessTokenResponse): ExchangeAccessTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeAccessTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeAccessTokenResponse;
    static deserializeBinaryFromReader(message: ExchangeAccessTokenResponse, reader: jspb.BinaryReader): ExchangeAccessTokenResponse;
}

export namespace ExchangeAccessTokenResponse {
    export type AsObject = {
        data?: AccessToken.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetAccessTokenResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): AccessToken | undefined;
    setData(value?: AccessToken): GetAccessTokenResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetAccessTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccessTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccessTokenResponse): GetAccessTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccessTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccessTokenResponse;
    static deserializeBinaryFromReader(message: GetAccessTokenResponse, reader: jspb.BinaryReader): GetAccessTokenResponse;
}

export namespace GetAccessTokenResponse {
    export type AsObject = {
        data?: AccessToken.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
