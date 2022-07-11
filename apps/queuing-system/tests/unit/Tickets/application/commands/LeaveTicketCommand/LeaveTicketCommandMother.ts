/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { LeaveTicketCommand } from '../../../../../../src/Tickets/application/commands/LeaveTicketCommand'

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
