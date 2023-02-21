/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneCustomerQuery } from '../../../../src/customers/get-one-customer'

export class GetOneCustomerQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetOneCustomerQuery {
    return GetOneCustomerQuery.build({ id, organizationId })
  }

  static random(): GetOneCustomerQuery {
    return this.create()
  }
}
