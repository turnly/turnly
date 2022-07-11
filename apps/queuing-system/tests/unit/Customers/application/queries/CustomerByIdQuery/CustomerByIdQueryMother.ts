/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { CustomerByIdQuery } from '../../../../../../src/Customers/application/queries/CustomerByIdQuery'

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
