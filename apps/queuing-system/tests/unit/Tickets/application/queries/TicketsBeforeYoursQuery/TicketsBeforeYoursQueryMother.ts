/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { TicketsBeforeYoursQuery } from '../../../../../../src/Tickets/application/queries/TicketsBeforeYoursQuery'

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
