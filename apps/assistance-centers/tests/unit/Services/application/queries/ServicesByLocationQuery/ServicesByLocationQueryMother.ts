/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
