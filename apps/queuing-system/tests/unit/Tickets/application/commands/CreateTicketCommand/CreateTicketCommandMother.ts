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
    serviceName: string = ObjectMother.word(),
    locationId: Guid = ObjectMother.uuid('loc'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Extra[] = []
  ): CreateTicketCommand {
    return new CreateTicketCommand({
      serviceId,
      serviceName,
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
