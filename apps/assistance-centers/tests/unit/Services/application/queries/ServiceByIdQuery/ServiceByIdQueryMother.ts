/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ServiceByIdQuery } from '../../../../../../src/Services/application/queries/ServiceByIdQuery'

export class ServiceByIdQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ServiceByIdQuery {
    return new ServiceByIdQuery(id, organizationId)
  }

  static random(): ServiceByIdQuery {
    return this.create()
  }
}
