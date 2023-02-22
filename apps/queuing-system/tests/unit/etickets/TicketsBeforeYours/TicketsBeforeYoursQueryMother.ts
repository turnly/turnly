/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { TicketsBeforeYoursQuery } from '../../../../src/etickets/TicketsBeforeYours'

export class TicketsBeforeYoursQueryMother {
  static create(
    ticketId: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): TicketsBeforeYoursQuery {
    return new TicketsBeforeYoursQuery(ticketId, customerId, organizationId)
  }

  static random(): TicketsBeforeYoursQuery {
    return this.create()
  }
}
