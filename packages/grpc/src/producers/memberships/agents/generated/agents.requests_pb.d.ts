// package: turnly.teams.v1.agents
// file: agents.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetAgentRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentRequest): GetAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentRequest;
    static deserializeBinaryFromReader(message: GetAgentRequest, reader: jspb.BinaryReader): GetAgentRequest;
}

export namespace GetAgentRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetAgentByUserIdRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetAgentByUserIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentByUserIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentByUserIdRequest): GetAgentByUserIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentByUserIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentByUserIdRequest;
    static deserializeBinaryFromReader(message: GetAgentByUserIdRequest, reader: jspb.BinaryReader): GetAgentByUserIdRequest;
}

export namespace GetAgentByUserIdRequest {
    export type AsObject = {
        userId: string,
    }
}
