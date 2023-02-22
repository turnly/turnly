/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { LeaveTicketCommand } from '../../../../src/tickets/LeaveTicket'

export class LeaveTicketCommandMother {
  static create(
    id: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): LeaveTicketCommand {
    return new LeaveTicketCommand({
      id,
      customerId,
      organizationId,
    })
  }

  static random(): LeaveTicketCommand {
    return this.create()
  }
}
