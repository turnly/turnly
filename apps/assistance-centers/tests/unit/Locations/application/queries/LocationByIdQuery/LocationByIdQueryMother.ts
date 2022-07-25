/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { LocationByIdQuery } from '../../../../../../src/Locations/application/queries/LocationByIdQuery'

export class LocationByIdQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): LocationByIdQuery {
    return new LocationByIdQuery(id, organizationId)
  }

  static random(): LocationByIdQuery {
    return this.create()
  }
}
