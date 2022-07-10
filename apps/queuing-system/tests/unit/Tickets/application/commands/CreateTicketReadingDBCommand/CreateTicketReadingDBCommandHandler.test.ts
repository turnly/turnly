/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { CreateTicketReadingDBCommandHandler } from '../../../../../../src/Tickets/application/commands/CreateTicketReadingDBCommand'
import { Ticket } from '../../../../../../src/Tickets/domain/entities/Ticket'
import { TicketsWritableRepo } from '../../../__mocks__/TicketsWritableRepo'
import { CreateTicketReadingDBCommandMother } from './CreateTicketReadingDBCommandMother'

it('should create the read version of a ticket when it is created from a command', async () => {
  const repository = new TicketsWritableRepo()
  const handler = new CreateTicketReadingDBCommandHandler(repository)

  const command = CreateTicketReadingDBCommandMother.random()
  const ticket = Ticket.build(command.payload)

  await handler.execute(command)

  repository.assertLastSavedIs(ticket)
})
