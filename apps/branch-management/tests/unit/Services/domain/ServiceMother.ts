/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ServiceByIdQuery } from '../../../../src/Services/application/queries/ServiceByIdQuery'
import { Service } from '../../../../src/Services/Shared/domain/entities/Service'

export class ServiceMother {
  static create(
    name: string = ObjectMother.names(),
    description: string = ObjectMother.names(),
    locationId: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): Service {
    return Service.create({
      name,
      description,
      locationId,
      organizationId,
    })
  }

  static random(): Service {
    return ServiceMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Service[] {
    return ObjectMother.repeater(ServiceMother.random, max)
  }

  static fromExistingServiceOnQuery(query: ServiceByIdQuery): Service {
    return Service.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }
}
