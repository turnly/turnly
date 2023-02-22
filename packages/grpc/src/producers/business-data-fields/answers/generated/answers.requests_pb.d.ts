// package: turnly.business_data_fields.v1.answers
// file: answers.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CreateAnswersObject extends jspb.Message { 
    getValue(): string;
    setValue(value: string): CreateAnswersObject;
    getFieldId(): string;
    setFieldId(value: string): CreateAnswersObject;
    getEntityId(): string;
    setEntityId(value: string): CreateAnswersObject;
    getEntityType(): string;
    setEntityType(value: string): CreateAnswersObject;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): CreateAnswersObject;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAnswersObject.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAnswersObject): CreateAnswersObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAnswersObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAnswersObject;
    static deserializeBinaryFromReader(message: CreateAnswersObject, reader: jspb.BinaryReader): CreateAnswersObject;
}

export namespace CreateAnswersObject {
    export type AsObject = {
        value: string,
        fieldId: string,
        entityId: string,
        entityType: string,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}

export class CreateAnswersRequest extends jspb.Message { 
    clearAnswersList(): void;
    getAnswersList(): Array<CreateAnswersObject>;
    setAnswersList(value: Array<CreateAnswersObject>): CreateAnswersRequest;
    addAnswers(value?: CreateAnswersObject, index?: number): CreateAnswersObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAnswersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAnswersRequest): CreateAnswersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAnswersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAnswersRequest;
    static deserializeBinaryFromReader(message: CreateAnswersRequest, reader: jspb.BinaryReader): CreateAnswersRequest;
}

export namespace CreateAnswersRequest {
    export type AsObject = {
        answersList: Array<CreateAnswersObject.AsObject>,
    }
}

export class ListAnswersByFieldRequest extends jspb.Message { 
    getFieldId(): string;
    setFieldId(value: string): ListAnswersByFieldRequest;
    getEntityType(): string;
    setEntityType(value: string): ListAnswersByFieldRequest;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): ListAnswersByFieldRequest;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnswersByFieldRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnswersByFieldRequest): ListAnswersByFieldRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnswersByFieldRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnswersByFieldRequest;
    static deserializeBinaryFromReader(message: ListAnswersByFieldRequest, reader: jspb.BinaryReader): ListAnswersByFieldRequest;
}

export namespace ListAnswersByFieldRequest {
    export type AsObject = {
        fieldId: string,
        entityType: string,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}
