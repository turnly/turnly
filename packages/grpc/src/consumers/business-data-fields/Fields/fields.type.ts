/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  FindCustomerFieldsByServiceRequest,
  FindCustomerFieldsByServiceResponse,
} from '../../../producers/business-data-fields'

export type IFindCustomerFieldsByServiceRequest =
  FindCustomerFieldsByServiceRequest.AsObject
export type IFindCustomerFieldsByServiceResponse =
  FindCustomerFieldsByServiceResponse.AsObject

export interface IFieldsClient {
  findCustomerFieldsByService(
    request: IFindCustomerFieldsByServiceRequest
  ): Promise<IFindCustomerFieldsByServiceResponse>
}
