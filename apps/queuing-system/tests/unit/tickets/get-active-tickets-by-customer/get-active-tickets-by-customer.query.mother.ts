/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetActiveTicketsByCustomerQuery } from '../../../../src/tickets/get-active-tickets-by-customer/get-active-tickets-by-customer.query'

export class GetActiveTicketsByCustomerQueryMother {
  static create(
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetActiveTicketsByCustomerQuery {
    return new GetActiveTicketsByCustomerQuery(customerId, organizationId)
  }

  static random(): GetActiveTicketsByCustomerQuery {
    return this.create()
  }
}
