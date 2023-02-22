/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  GetServiceResponse,
  ListServicesOfOneLocationResponse,
  Meta,
  Service,
} from '../../../src/producers/branch-management'

export class ServicesResponseMother {
  static randomForGetOne(): GetServiceResponse {
    const service = new Service()
      .setId(ObjectMother.uuid('srv'))
      .setName(ObjectMother.names())
      .setDescription(ObjectMother.paragraph())
      .setLocationId(ObjectMother.uuid('loc'))

    return new GetServiceResponse().setData(service)
  }

  static randomForListServicesOfOneLocation(): ListServicesOfOneLocationResponse {
    const services = ObjectMother.repeater(this.create, 4)

    return new ListServicesOfOneLocationResponse().setDataList(services)
  }

  static create(): Service {
    return new Service()
      .setId(ObjectMother.uuid('srv'))
      .setName(ObjectMother.names())
      .setDescription(ObjectMother.paragraph())
      .setLocationId(ObjectMother.uuid('loc'))
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetServiceResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetServiceResponse().setMeta(meta)
  }

  static randomForListServicesOfOneLocationError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): ListServicesOfOneLocationResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new ListServicesOfOneLocationResponse().setMeta(meta)
  }
}
