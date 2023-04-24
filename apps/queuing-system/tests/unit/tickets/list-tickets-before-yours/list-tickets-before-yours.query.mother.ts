/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ListTicketsBeforeYoursQuery } from '../../../../src/tickets/list-tickets-before-yours'

export class ListTicketsBeforeYoursQueryMother {
  static create(
    ticketId: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ListTicketsBeforeYoursQuery {
    return new ListTicketsBeforeYoursQuery(ticketId, customerId, organizationId)
  }

  static random(): ListTicketsBeforeYoursQuery {
    return this.create()
  }
}
