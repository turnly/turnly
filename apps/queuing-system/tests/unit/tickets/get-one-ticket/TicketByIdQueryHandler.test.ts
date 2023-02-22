/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneTicketQueryHandler } from '../../../../src/tickets/shared/application/queries'
import { TicketsReadableRepo } from '../shared/__mocks__/TicketsReadableRepo'
import { TicketMother } from '../shared/domain/TicketMother'
import { GetOneTicketQueryMother } from './TicketByIdQueryMother'

let repository: TicketsReadableRepo
let handler: GetOneTicketQueryHandler

describe('tickets > queries > validates the expected behavior of TicketByIdQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new GetOneTicketQueryHandler(repository)
  })

  it('should get an existing ticket', async () => {
    const query = GetOneTicketQueryMother.random()
    const ticket = TicketMother.fromExistingTicketOnQuery(query)

    repository.attachGetOneResponse(ticket)

    const response = await handler.execute(query)

    repository.assertGetOneHasBeenCalled()
    expect(response).toEqual(ticket)
  })
})
