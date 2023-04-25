/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneOrganizationQuery } from '../../../../src/organizations/shared/application/queries'

export class GetOneOrganizationQueryMother {
  static create(id: Guid = ObjectMother.uuid('org')): GetOneOrganizationQuery {
    return new GetOneOrganizationQuery(id)
  }

  static random(): GetOneOrganizationQuery {
    return this.create()
  }
}
