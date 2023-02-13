/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneLocationQuery } from '../../../../src/Locations/GetOneLocation'

export class GetOneLocationQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetOneLocationQuery {
    return new GetOneLocationQuery(id, organizationId)
  }

  static random(): GetOneLocationQuery {
    return this.create()
  }
}