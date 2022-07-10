/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'

import { CreateTicketCommand } from '../../../../../../src/Tickets/application/commands/CreateTicketCommand'
import { MotherObject } from '../../../../../shared/MotherObject'

export class CreateTicketCommandMother {
  static create(
    serviceId: Guid = MotherObject.uuid('srv'),
    locationId: Guid = MotherObject.uuid('loc'),
    customerId: Guid = MotherObject.uuid('cust'),
    organizationId: Guid = MotherObject.uuid('org'),
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
