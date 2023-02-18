/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneServiceQuery } from '../../../../src/Services/GetOneService'

export class GetOneServiceQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('loc'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetOneServiceQuery {
    return GetOneServiceQuery.build({ id, organizationId })
  }

  static random(): GetOneServiceQuery {
    return this.create()
  }
}
