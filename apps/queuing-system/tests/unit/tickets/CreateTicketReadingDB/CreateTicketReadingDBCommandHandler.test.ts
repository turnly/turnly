/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CreateTicketReadingDBCommandHandler } from '../../../../src/tickets/CreateTicketReadingDB'
import { Ticket } from '../../../../src/tickets/shared/domain/entities/Ticket'
import { TicketsWritableRepo } from '../shared/__mocks__/TicketsWritableRepo'
import { CreateTicketReadingDBCommandMother } from './CreateTicketReadingDBCommandMother'

it('should create the read version of a ticket when it is created from a command', async () => {
  const repository = new TicketsWritableRepo()
  const handler = new CreateTicketReadingDBCommandHandler(repository)

  const command = CreateTicketReadingDBCommandMother.random()
  const ticket = Ticket.build(command.payload)

  await handler.execute(command)

  repository.assertLastSavedIs(ticket)
})
