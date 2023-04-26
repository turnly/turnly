/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/observability'

import { ListTicketsBeforeYoursQueryHandler } from '../../../../src/tickets/list-tickets-before-yours'
import { TicketMother } from '../shared/ticket.entity.mother'
import { TicketsReadableRepo } from '../shared/tickets-readable.repo'
import { ListTicketsBeforeYoursQueryMother } from './list-tickets-before-yours.query.mother'

let repository: TicketsReadableRepo
let handler: ListTicketsBeforeYoursQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsBeforeYoursQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new ListTicketsBeforeYoursQueryHandler(repository)
  })

  it('should get a collection of tickets before yours', async () => {
    const query = ListTicketsBeforeYoursQueryMother.random()
    const ticket = TicketMother.fromExistingTicketOnQuery({
      ...query,
      id: query.ticketId,
    })

    const expected = [
      TicketMother.random(),
      TicketMother.random(),
      TicketMother.random(),
    ]

    repository.attachGetOneResponse(ticket)
    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    repository.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected)
  })

  it('should throw a ResourceNotFoundException when the ticket does not exist', async () => {
    const query = ListTicketsBeforeYoursQueryMother.random()

    repository.attachGetOneResponse(null)

    await expect(handler.execute(query)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertGetOneHasBeenCalled()
  })
})
