/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ServiceByIdQuery } from '../../../../src/Services/application/queries/ServiceByIdQuery'
import { Service } from '../../../../src/Services/domain/entities/Service'

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

  static fromExistingServiceOnQuery(
    query: ServiceByIdQuery | { organizationId: Guid; id: Guid }
  ): Service {
    return Service.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }
}
