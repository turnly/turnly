/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ActiveTicketsByCustomerQuery } from '../../../../../../src/Tickets/application/queries/ActiveTicketsByCustomerQuery'

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
