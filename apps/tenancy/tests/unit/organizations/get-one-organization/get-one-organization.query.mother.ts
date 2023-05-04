/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneOrganizationQuery } from '../../../../src/organizations/get-one-organization'

export class GetOneOrganizationQueryMother {
  static create(id: Guid = ObjectMother.uuid('org')): GetOneOrganizationQuery {
    return GetOneOrganizationQuery.build({ id })
  }

  static random(): GetOneOrganizationQuery {
    return this.create()
  }
}
