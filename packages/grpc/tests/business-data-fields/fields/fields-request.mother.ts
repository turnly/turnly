/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { IFindCustomerFieldsByServiceRequest } from '../../../src/consumers/business-data-fields'

export class FieldsRequestMother {
  static randomForFindCustomerFieldsByService(): IFindCustomerFieldsByServiceRequest {
    return {
      serviceId: ObjectMother.uuid('srv'),
    }
  }

  static randomForFindCustomerFieldsByServiceEmpty(): IFindCustomerFieldsByServiceRequest {
    return {
      serviceId: '',
    }
  }
}
