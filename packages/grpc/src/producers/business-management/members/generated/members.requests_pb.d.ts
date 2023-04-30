// package: turnly.business_management.v1.members
// file: members.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetMemberRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetMemberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMemberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMemberRequest): GetMemberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMemberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMemberRequest;
    static deserializeBinaryFromReader(message: GetMemberRequest, reader: jspb.BinaryReader): GetMemberRequest;
}

export namespace GetMemberRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetMemberByUserIdRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetMemberByUserIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMemberByUserIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMemberByUserIdRequest): GetMemberByUserIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMemberByUserIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMemberByUserIdRequest;
    static deserializeBinaryFromReader(message: GetMemberByUserIdRequest, reader: jspb.BinaryReader): GetMemberByUserIdRequest;
}

export namespace GetMemberByUserIdRequest {
    export type AsObject = {
        userId: string,
    }
}
