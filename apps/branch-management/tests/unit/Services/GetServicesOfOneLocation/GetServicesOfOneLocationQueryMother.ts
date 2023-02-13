/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetServicesOfOneLocationQuery } from '../../../../src/Services/GetServicesOfOneLocation'

export class GetServicesOfOneLocationQueryMother {
  static create(
    locationId: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetServicesOfOneLocationQuery {
    return new GetServicesOfOneLocationQuery(locationId, organizationId)
  }

  static random(): GetServicesOfOneLocationQuery {
    return this.create()
  }
}
