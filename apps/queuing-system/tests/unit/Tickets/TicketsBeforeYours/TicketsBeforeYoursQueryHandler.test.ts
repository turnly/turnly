/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'

import { TicketsBeforeYoursQueryHandler } from '../../../../src/Tickets/TicketsBeforeYours'
import { TicketsReadableRepo } from '../shared/__mocks__/TicketsReadableRepo'
import { TicketMother } from '../shared/domain/TicketMother'
import { TicketsBeforeYoursQueryMother } from './TicketsBeforeYoursQueryMother'

let repository: TicketsReadableRepo
let handler: TicketsBeforeYoursQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsBeforeYoursQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new TicketsBeforeYoursQueryHandler(repository)
  })

  it('should get a collection of tickets before yours', async () => {
    const query = TicketsBeforeYoursQueryMother.random()
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
    const query = TicketsBeforeYoursQueryMother.random()

    repository.attachGetOneResponse(null)

    await expect(handler.execute(query)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertGetOneHasBeenCalled()
  })
})
