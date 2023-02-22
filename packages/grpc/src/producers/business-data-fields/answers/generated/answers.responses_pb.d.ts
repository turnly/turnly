// package: turnly.business_data_fields.v1.answers
// file: answers.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Answer extends jspb.Message { 
    getId(): string;
    setId(value: string): Answer;
    getValue(): string;
    setValue(value: string): Answer;
    getFieldId(): string;
    setFieldId(value: string): Answer;
    getEntityId(): string;
    setEntityId(value: string): Answer;
    getEntityType(): string;
    setEntityType(value: string): Answer;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): Answer;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
    export type AsObject = {
        id: string,
        value: string,
        fieldId: string,
        entityId: string,
        entityType: string,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}

export class CreateAnswersResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Answer>;
    setDataList(value: Array<Answer>): CreateAnswersResponse;
    addData(value?: Answer, index?: number): Answer;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CreateAnswersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAnswersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAnswersResponse): CreateAnswersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAnswersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAnswersResponse;
    static deserializeBinaryFromReader(message: CreateAnswersResponse, reader: jspb.BinaryReader): CreateAnswersResponse;
}

export namespace CreateAnswersResponse {
    export type AsObject = {
        dataList: Array<Answer.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}

export class ListAnswersByFieldResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Answer>;
    setDataList(value: Array<Answer>): ListAnswersByFieldResponse;
    addData(value?: Answer, index?: number): Answer;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): ListAnswersByFieldResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnswersByFieldResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnswersByFieldResponse): ListAnswersByFieldResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnswersByFieldResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnswersByFieldResponse;
    static deserializeBinaryFromReader(message: ListAnswersByFieldResponse, reader: jspb.BinaryReader): ListAnswersByFieldResponse;
}

export namespace ListAnswersByFieldResponse {
    export type AsObject = {
        dataList: Array<Answer.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}
