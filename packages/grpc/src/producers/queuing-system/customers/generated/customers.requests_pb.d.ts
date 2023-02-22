// package: turnly.queuing_system.v1.customers
// file: customers.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CreateCustomerObject extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateCustomerObject;
    getLastname(): string;
    setLastname(value: string): CreateCustomerObject;
    getEmail(): string;
    setEmail(value: string): CreateCustomerObject;
    getCountry(): string;
    setCountry(value: string): CreateCustomerObject;
    getPhone(): string;
    setPhone(value: string): CreateCustomerObject;
    getHasWhatsapp(): boolean;
    setHasWhatsapp(value: boolean): CreateCustomerObject;
    getShowNameSignage(): boolean;
    setShowNameSignage(value: boolean): CreateCustomerObject;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): CreateCustomerObject;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomerObject.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomerObject): CreateCustomerObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomerObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomerObject;
    static deserializeBinaryFromReader(message: CreateCustomerObject, reader: jspb.BinaryReader): CreateCustomerObject;
}

export namespace CreateCustomerObject {
    export type AsObject = {
        name: string,
        lastname: string,
        email: string,
        country: string,
        phone: string,
        hasWhatsapp: boolean,
        showNameSignage: boolean,
        extrasList: Array<common_pb.Extra.AsObject>,
    }
}

export class CreateCustomerRequest extends jspb.Message { 

    hasCustomer(): boolean;
    clearCustomer(): void;
    getCustomer(): CreateCustomerObject | undefined;
    setCustomer(value?: CreateCustomerObject): CreateCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomerRequest): CreateCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomerRequest;
    static deserializeBinaryFromReader(message: CreateCustomerRequest, reader: jspb.BinaryReader): CreateCustomerRequest;
}

export namespace CreateCustomerRequest {
    export type AsObject = {
        customer?: CreateCustomerObject.AsObject,
    }
}

export class GetCustomerRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomerRequest): GetCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomerRequest;
    static deserializeBinaryFromReader(message: GetCustomerRequest, reader: jspb.BinaryReader): GetCustomerRequest;
}

export namespace GetCustomerRequest {
    export type AsObject = {
        id: string,
    }
}
