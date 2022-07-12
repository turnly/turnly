/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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
