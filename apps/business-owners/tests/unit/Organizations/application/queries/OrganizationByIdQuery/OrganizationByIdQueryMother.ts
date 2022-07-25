/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { OrganizationByIdQuery } from '../../../../../../src/Organizations/application/queries/OrganizationByIdQuery'

export class OrganizationByIdQueryMother {
  static create(id: Guid = ObjectMother.uuid('org')): OrganizationByIdQuery {
    return new OrganizationByIdQuery(id)
  }

  static random(): OrganizationByIdQuery {
    return this.create()
  }
}
