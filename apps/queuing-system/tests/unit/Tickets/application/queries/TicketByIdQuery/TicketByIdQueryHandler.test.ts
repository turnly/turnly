/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { TicketByIdQueryHandler } from '../../../../../../src/Tickets/application/queries/TicketByIdQuery'
import { TicketsReadableRepo } from '../../../__mocks__/TicketsReadableRepo'
import { TicketMother } from '../../../domain/TicketMother'
import { TicketByIdQueryMother } from './TicketByIdQueryMother'

let repository: TicketsReadableRepo
let handler: TicketByIdQueryHandler

describe('tickets > queries > validates the expected behavior of TicketByIdQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new TicketByIdQueryHandler(repository)
  })

  it('should get an existing ticket', async () => {
    const query = TicketByIdQueryMother.random()
    const ticket = TicketMother.fromExistingTicketOnQuery(query)

    repository.attachGetOneResponse(ticket)

    const response = await handler.execute(query)

    repository.assertGetOneHasBeenCalled()
    expect(response).toEqual(ticket)
  })
})
