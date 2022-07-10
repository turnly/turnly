/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { AnnounceTicketCommand } from '../../../../../../src/Tickets/application/commands/AnnounceTicketCommand'
import { ObjectMother } from '../../../../../shared/ObjectMother'

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
