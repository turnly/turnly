/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { AnnounceTicketCommand } from '../../../../src/Tickets/AnnounceTicket'

export class AnnounceTicketCommandMother {
  static create(
    id: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): AnnounceTicketCommand {
    return new AnnounceTicketCommand({
      id,
      customerId,
      organizationId,
    })
  }

  static random(): AnnounceTicketCommand {
    return this.create()
  }
}
