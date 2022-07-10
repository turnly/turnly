/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { CreateTicketCommand } from '../../../../../../src/Tickets/application/commands/CreateTicketCommand'
import { MotherObject } from '../../../../../shared/MotherObject'

export class CreateTicketCommandMother {
  static random(): CreateTicketCommand {
    return new CreateTicketCommand({
      serviceId: MotherObject.uuid('srv'),
      locationId: MotherObject.uuid('loc'),
      customerId: MotherObject.uuid('cust'),
      organizationId: MotherObject.uuid('org'),
      extra: [],
    })
  }
}
