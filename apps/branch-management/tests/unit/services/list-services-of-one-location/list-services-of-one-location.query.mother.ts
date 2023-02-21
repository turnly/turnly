/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ListServicesOfOneLocationQuery } from '../../../../src/services/list-services-of-one-location'

export class ListServicesOfOneLocationQueryMother {
  static create(
    locationId: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ListServicesOfOneLocationQuery {
    return ListServicesOfOneLocationQuery.build({ locationId, organizationId })
  }

  static random(): ListServicesOfOneLocationQuery {
    return this.create()
  }
}
