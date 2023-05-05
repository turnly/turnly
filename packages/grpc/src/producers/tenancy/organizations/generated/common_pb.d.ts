// package: turnly.common.v1
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Meta extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): Meta;
    getTitle(): string;
    setTitle(value: string): Meta;
    getMessage(): string;
    setMessage(value: string): Meta;
    getSuccess(): boolean;
    setSuccess(value: boolean): Meta;
    getTimestamp(): number;
    setTimestamp(value: number): Meta;
    clearErrorsList(): void;
    getErrorsList(): Array<Meta.ExceptionMessage>;
    setErrorsList(value: Array<Meta.ExceptionMessage>): Meta;
    addErrors(value?: Meta.ExceptionMessage, index?: number): Meta.ExceptionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Meta.AsObject;
    static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Meta;
    static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
}

export namespace Meta {
    export type AsObject = {
        status: number,
        title: string,
        message: string,
        success: boolean,
        timestamp: number,
        errorsList: Array<Meta.ExceptionMessage.AsObject>,
    }


    export class ExceptionMessage extends jspb.Message { 
        getParameter(): string;
        setParameter(value: string): ExceptionMessage;
        getMessage(): string;
        setMessage(value: string): ExceptionMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExceptionMessage.AsObject;
        static toObject(includeInstance: boolean, msg: ExceptionMessage): ExceptionMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExceptionMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExceptionMessage;
        static deserializeBinaryFromReader(message: ExceptionMessage, reader: jspb.BinaryReader): ExceptionMessage;
    }

    export namespace ExceptionMessage {
        export type AsObject = {
            parameter: string,
            message: string,
        }
    }

}

export class Extra extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Extra;
    getValue(): string;
    setValue(value: string): Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extra.AsObject;
    static toObject(includeInstance: boolean, msg: Extra): Extra.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Extra, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extra;
    static deserializeBinaryFromReader(message: Extra, reader: jspb.BinaryReader): Extra;
}

export namespace Extra {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class ExceptionResponse extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): Meta | undefined;
    setMeta(value?: Meta): ExceptionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExceptionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExceptionResponse): ExceptionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExceptionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExceptionResponse;
    static deserializeBinaryFromReader(message: ExceptionResponse, reader: jspb.BinaryReader): ExceptionResponse;
}

export namespace ExceptionResponse {
    export type AsObject = {
        meta?: Meta.AsObject,
    }
}
