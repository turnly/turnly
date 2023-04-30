// package: turnly.business_management.v1.members
// file: members.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Member extends jspb.Message { 
    getId(): string;
    setId(value: string): Member;
    getName(): string;
    setName(value: string): Member;
    getRole(): string;
    setRole(value: string): Member;
    getUserId(): string;
    setUserId(value: string): Member;
    getLocationId(): string;
    setLocationId(value: string): Member;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): Member;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Member.AsObject;
    static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Member;
    static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
    export type AsObject = {
        id: string,
        name: string,
        role: string,
        userId: string,
        locationId: string,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}

export class GetMemberResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Member | undefined;
    setData(value?: Member): GetMemberResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetMemberResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMemberResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMemberResponse): GetMemberResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMemberResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMemberResponse;
    static deserializeBinaryFromReader(message: GetMemberResponse, reader: jspb.BinaryReader): GetMemberResponse;
}

export namespace GetMemberResponse {
    export type AsObject = {
        data?: Member.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetMemberByUserIdResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Member | undefined;
    setData(value?: Member): GetMemberByUserIdResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetMemberByUserIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMemberByUserIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMemberByUserIdResponse): GetMemberByUserIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMemberByUserIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMemberByUserIdResponse;
    static deserializeBinaryFromReader(message: GetMemberByUserIdResponse, reader: jspb.BinaryReader): GetMemberByUserIdResponse;
}

export namespace GetMemberByUserIdResponse {
    export type AsObject = {
        data?: Member.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
