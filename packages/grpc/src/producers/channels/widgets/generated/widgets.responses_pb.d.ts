// package: turnly.channels.v1.widgets
// file: widgets.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Widget extends jspb.Message { 
    getId(): string;
    setId(value: string): Widget;
    getName(): string;
    setName(value: string): Widget;
    getDeviceId(): string;
    setDeviceId(value: string): Widget;
    clearOriginsList(): void;
    getOriginsList(): Array<string>;
    setOriginsList(value: Array<string>): Widget;
    addOrigins(value: string, index?: number): string;
    getPosition(): string;
    setPosition(value: string): Widget;
    getOpenByDefault(): boolean;
    setOpenByDefault(value: boolean): Widget;
    getShowFullscreen(): boolean;
    setShowFullscreen(value: boolean): Widget;
    getShowCloseButton(): boolean;
    setShowCloseButton(value: boolean): Widget;
    getOrganizationId(): string;
    setOrganizationId(value: string): Widget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Widget.AsObject;
    static toObject(includeInstance: boolean, msg: Widget): Widget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Widget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Widget;
    static deserializeBinaryFromReader(message: Widget, reader: jspb.BinaryReader): Widget;
}

export namespace Widget {
    export type AsObject = {
        id: string,
        name: string,
        deviceId: string,
        originsList: Array<string>,
        position: string,
        openByDefault: boolean,
        showFullscreen: boolean,
        showCloseButton: boolean,
        organizationId: string,
    }
}

export class GetWidgetResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Widget | undefined;
    setData(value?: Widget): GetWidgetResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetWidgetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWidgetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWidgetResponse): GetWidgetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWidgetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWidgetResponse;
    static deserializeBinaryFromReader(message: GetWidgetResponse, reader: jspb.BinaryReader): GetWidgetResponse;
}

export namespace GetWidgetResponse {
    export type AsObject = {
        data?: Widget.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
