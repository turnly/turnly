// package: turnly.business_data_fields.v1.fields
// file: fields.requests.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FindCustomerFieldsByServiceRequest extends jspb.Message { 
    getServiceId(): string;
    setServiceId(value: string): FindCustomerFieldsByServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindCustomerFieldsByServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindCustomerFieldsByServiceRequest): FindCustomerFieldsByServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindCustomerFieldsByServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindCustomerFieldsByServiceRequest;
    static deserializeBinaryFromReader(message: FindCustomerFieldsByServiceRequest, reader: jspb.BinaryReader): FindCustomerFieldsByServiceRequest;
}

export namespace FindCustomerFieldsByServiceRequest {
    export type AsObject = {
        serviceId: string,
    }
}
