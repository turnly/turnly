/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { CustomerByIdQuery } from '../../../../src/customers/CustomerById'

export class CustomerByIdQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): CustomerByIdQuery {
    return new CustomerByIdQuery(id, organizationId)
  }

  static random(): CustomerByIdQuery {
    return this.create()
  }
}
