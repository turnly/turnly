/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  FindCustomerFieldsByServiceResponse,
  Meta,
} from '../../../src/producers/business-data-fields'
import { FieldMother } from './field.mother'

export class FieldsResponseMother {
  static randomForFindCustomerFieldsByService(): FindCustomerFieldsByServiceResponse {
    const fields = ObjectMother.repeater(FieldMother.random, 10)

    return new FindCustomerFieldsByServiceResponse().setDataList(fields)
  }

  static randomForFindCustomerFieldsByServiceError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): FindCustomerFieldsByServiceResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new FindCustomerFieldsByServiceResponse().setMeta(meta)
  }
}
