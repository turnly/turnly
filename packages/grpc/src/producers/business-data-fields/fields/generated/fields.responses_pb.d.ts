// package: turnly.business_data_fields.v1.fields
// file: fields.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Field extends jspb.Message { 
    getId(): string;
    setId(value: string): Field;
    getLabel(): string;
    setLabel(value: string): Field;
    getDescription(): string;
    setDescription(value: string): Field;
    getPlaceholder(): string;
    setPlaceholder(value: string): Field;
    getType(): string;
    setType(value: string): Field;
    getEntityType(): string;
    setEntityType(value: string): Field;
    getIsRequired(): boolean;
    setIsRequired(value: boolean): Field;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): Field;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Field.AsObject;
    static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Field;
    static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
    export type AsObject = {
        id: string,
        label: string,
        description: string,
        placeholder: string,
        type: string,
        entityType: string,
        isRequired: boolean,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}

export class FindCustomerFieldsByServiceResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Field>;
    setDataList(value: Array<Field>): FindCustomerFieldsByServiceResponse;
    addData(value?: Field, index?: number): Field;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): FindCustomerFieldsByServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindCustomerFieldsByServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindCustomerFieldsByServiceResponse): FindCustomerFieldsByServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindCustomerFieldsByServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindCustomerFieldsByServiceResponse;
    static deserializeBinaryFromReader(message: FindCustomerFieldsByServiceResponse, reader: jspb.BinaryReader): FindCustomerFieldsByServiceResponse;
}

export namespace FindCustomerFieldsByServiceResponse {
    export type AsObject = {
        dataList: Array<Field.AsObject>,
        meta?: common_pb.Meta.AsObject,
    }
}
