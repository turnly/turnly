/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ServicesByLocationQuery } from '../../../../../../src/Services/application/queries/ServicesByLocationQuery'

export class ServicesByLocationQueryMother {
  static create(
    locationId: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ServicesByLocationQuery {
    return new ServicesByLocationQuery(locationId, organizationId)
  }

  static random(): ServicesByLocationQuery {
    return this.create()
  }
}
