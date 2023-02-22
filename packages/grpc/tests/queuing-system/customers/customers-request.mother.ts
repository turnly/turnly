/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import {
  ICreateCustomerRequest,
  IGetCustomerRequest,
} from '../../../src/consumers/queuing-system'
import { CustomerMother } from './customer.mother'

export class CustomersRequestMother {
  static randomForCreate(): ICreateCustomerRequest {
    return {
      customer: CustomerMother.randomToObject(),
    }
  }

  static randomForCreateEmpty(): ICreateCustomerRequest {
    return {
      customer: undefined,
    }
  }

  static randomForGetOne(): IGetCustomerRequest {
    return {
      id: ObjectMother.uuid('cus'),
    }
  }

  static randomForGetOneEmpty(): IGetCustomerRequest {
    return {
      id: '',
    }
  }
}
