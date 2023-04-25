/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  GetOrganizationResponse,
  Meta,
  Organization,
} from '../../../src/producers/business-management'

export class OrganizationsResponseMother {
  static randomForGetOne(): GetOrganizationResponse {
    const organization = new Organization()
      .setId(ObjectMother.uuid('org'))
      .setName(ObjectMother.names())
      .setStatus(ObjectMother.word())
      .setSubdomain(ObjectMother.names())

    return new GetOrganizationResponse().setData(organization)
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetOrganizationResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetOrganizationResponse().setMeta(meta)
  }
}
