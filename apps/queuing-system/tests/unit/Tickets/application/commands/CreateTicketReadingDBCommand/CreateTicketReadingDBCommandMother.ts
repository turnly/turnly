/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { CreateTicketReadingDBCommand } from '../../../../../../src/Tickets/application/commands/CreateTicketReadingDBCommand'
import { TicketMother } from '../../../domain/TicketMother'

export class CreateTicketReadingDBCommandMother {
  static create(): CreateTicketReadingDBCommand {
    return new CreateTicketReadingDBCommand(TicketMother.random().toObject())
  }

  static random(): CreateTicketReadingDBCommand {
    return this.create()
  }
}
