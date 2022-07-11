/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { CreateTicketCommand } from '../../../../../../src/Tickets/application/commands/CreateTicketCommand'

export class CreateTicketCommandMother {
  static create(
    serviceId: Guid = ObjectMother.uuid('srv'),
    locationId: Guid = ObjectMother.uuid('loc'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Extra[] = []
  ): CreateTicketCommand {
    return new CreateTicketCommand({
      serviceId,
      locationId,
      customerId,
      organizationId,
      extra,
    })
  }

  static random(): CreateTicketCommand {
    return this.create()
  }
}
