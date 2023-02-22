/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  CreateCustomerResponse,
  GetCustomerResponse,
  Meta,
} from '../../../src/producers/queuing-system'
import { CustomerMother } from './customer.mother'

export class CustomersResponseMother {
  static randomForCreate(): CreateCustomerResponse {
    const customer = CustomerMother.random()

    return new CreateCustomerResponse().setData(customer)
  }

  static randomForGetOne(): GetCustomerResponse {
    const customer = CustomerMother.random()

    return new GetCustomerResponse().setData(customer)
  }

  static randomForCreateError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): CreateCustomerResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new CreateCustomerResponse().setMeta(meta)
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetCustomerResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetCustomerResponse().setMeta(meta)
  }
}
