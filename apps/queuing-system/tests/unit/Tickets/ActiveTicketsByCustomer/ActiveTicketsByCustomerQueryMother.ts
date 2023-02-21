/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ActiveTicketsByCustomerQuery } from '../../../../src/Tickets/Shared/application/queries'

export class ActiveTicketsByCustomerQueryMother {
  static create(
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ActiveTicketsByCustomerQuery {
    return new ActiveTicketsByCustomerQuery(customerId, organizationId)
  }

  static random(): ActiveTicketsByCustomerQuery {
    return this.create()
  }
}
