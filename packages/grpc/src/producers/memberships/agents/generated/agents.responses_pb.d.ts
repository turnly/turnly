// package: turnly.teams.v1.agents
// file: agents.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Agent extends jspb.Message { 
    getId(): string;
    setId(value: string): Agent;
    getName(): string;
    setName(value: string): Agent;
    getLastname(): string;
    setLastname(value: string): Agent;
    getLocationId(): string;
    setLocationId(value: string): Agent;
    getNick(): string;
    setNick(value: string): Agent;
    getPosition(): string;
    setPosition(value: string): Agent;
    getDeskId(): string;
    setDeskId(value: string): Agent;
    clearServingFromIdsList(): void;
    getServingFromIdsList(): Array<string>;
    setServingFromIdsList(value: Array<string>): Agent;
    addServingFromIds(value: string, index?: number): string;
    getUserId(): string;
    setUserId(value: string): Agent;
    getOrganizationId(): string;
    setOrganizationId(value: string): Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
}

export namespace Agent {
    export type AsObject = {
        id: string,
        name: string,
        lastname: string,
        locationId: string,
        nick: string,
        position: string,
        deskId: string,
        servingFromIdsList: Array<string>,
        userId: string,
        organizationId: string,
    }
}

export class GetAgentResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Agent | undefined;
    setData(value?: Agent): GetAgentResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetAgentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentResponse): GetAgentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentResponse;
    static deserializeBinaryFromReader(message: GetAgentResponse, reader: jspb.BinaryReader): GetAgentResponse;
}

export namespace GetAgentResponse {
    export type AsObject = {
        data?: Agent.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetAgentByUserIdResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Agent | undefined;
    setData(value?: Agent): GetAgentByUserIdResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetAgentByUserIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentByUserIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentByUserIdResponse): GetAgentByUserIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentByUserIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentByUserIdResponse;
    static deserializeBinaryFromReader(message: GetAgentByUserIdResponse, reader: jspb.BinaryReader): GetAgentByUserIdResponse;
}

export namespace GetAgentByUserIdResponse {
    export type AsObject = {
        data?: Agent.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
