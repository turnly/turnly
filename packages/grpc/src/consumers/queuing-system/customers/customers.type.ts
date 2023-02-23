/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  GetCustomerRequest,
  GetCustomerResponse,
} from '../../../producers/queuing-system'

export type ICreateCustomerRequest = CreateCustomerRequest.AsObject
export type ICreateCustomerResponse = CreateCustomerResponse.AsObject
export type IGetCustomerRequest = GetCustomerRequest.AsObject
export type IGetCustomerResponse = GetCustomerResponse.AsObject

export interface ICustomersClient {
  create(request: ICreateCustomerRequest): Promise<ICreateCustomerResponse>
  getOne(request: IGetCustomerRequest): Promise<IGetCustomerResponse>
}
