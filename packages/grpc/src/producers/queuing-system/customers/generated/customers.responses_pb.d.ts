// package: turnly.queuing_system.v1.customers
// file: customers.responses.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer;
    getName(): string;
    setName(value: string): Customer;
    getLastname(): string;
    setLastname(value: string): Customer;
    getEmail(): string;
    setEmail(value: string): Customer;
    getCountry(): string;
    setCountry(value: string): Customer;
    getPhone(): string;
    setPhone(value: string): Customer;
    getHasWhatsapp(): boolean;
    setHasWhatsapp(value: boolean): Customer;
    getShowNameSignage(): boolean;
    setShowNameSignage(value: boolean): Customer;
    clearExtrasList(): void;
    getExtrasList(): Array<common_pb.Extra>;
    setExtrasList(value: Array<common_pb.Extra>): Customer;
    addExtras(value?: common_pb.Extra, index?: number): common_pb.Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        id: string,
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

export class CreateCustomerResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Customer | undefined;
    setData(value?: Customer): CreateCustomerResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): CreateCustomerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomerResponse): CreateCustomerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomerResponse;
    static deserializeBinaryFromReader(message: CreateCustomerResponse, reader: jspb.BinaryReader): CreateCustomerResponse;
}

export namespace CreateCustomerResponse {
    export type AsObject = {
        data?: Customer.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}

export class GetCustomerResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Customer | undefined;
    setData(value?: Customer): GetCustomerResponse;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.Meta | undefined;
    setMeta(value?: common_pb.Meta): GetCustomerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomerResponse): GetCustomerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomerResponse;
    static deserializeBinaryFromReader(message: GetCustomerResponse, reader: jspb.BinaryReader): GetCustomerResponse;
}

export namespace GetCustomerResponse {
    export type AsObject = {
        data?: Customer.AsObject,
        meta?: common_pb.Meta.AsObject,
    }
}
