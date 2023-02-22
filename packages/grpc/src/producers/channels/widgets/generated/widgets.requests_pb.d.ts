// package: turnly.channels.v1.widgets
// file: widgets.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetWidgetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetWidgetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWidgetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWidgetRequest): GetWidgetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWidgetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWidgetRequest;
    static deserializeBinaryFromReader(message: GetWidgetRequest, reader: jspb.BinaryReader): GetWidgetRequest;
}

export namespace GetWidgetRequest {
    export type AsObject = {
        id: string,
    }
}
