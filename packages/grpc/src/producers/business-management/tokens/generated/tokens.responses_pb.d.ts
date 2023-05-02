// package: turnly.business_management.v1.tokens
// file: tokens.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Token extends jspb.Message { 
    getId(): string;
    setId(value: string): Token;
    getName(): string;
    setName(value: string): Token;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): Token;
    addScopes(value: string, index?: number): string;
    getSecret(): string;
    setSecret(value: string): Token;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Token.AsObject;
    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Token;
    static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
    export type AsObject = {
        id: string,
        name: string,
        scopesList: Array<string>,
        secret: string,
    }
}

export class CreateTokenResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Token | undefined;
    setData(value?: Token): CreateTokenResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CreateTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTokenResponse): CreateTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTokenResponse;
    static deserializeBinaryFromReader(message: CreateTokenResponse, reader: jspb.BinaryReader): CreateTokenResponse;
}

export namespace CreateTokenResponse {
    export type AsObject = {
        data?: Token.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ExchangeTokenResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Token | undefined;
    setData(value?: Token): ExchangeTokenResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ExchangeTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeTokenResponse): ExchangeTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeTokenResponse;
    static deserializeBinaryFromReader(message: ExchangeTokenResponse, reader: jspb.BinaryReader): ExchangeTokenResponse;
}

export namespace ExchangeTokenResponse {
    export type AsObject = {
        data?: Token.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetTokenResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Token | undefined;
    setData(value?: Token): GetTokenResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenResponse): GetTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenResponse;
    static deserializeBinaryFromReader(message: GetTokenResponse, reader: jspb.BinaryReader): GetTokenResponse;
}

export namespace GetTokenResponse {
    export type AsObject = {
        data?: Token.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
