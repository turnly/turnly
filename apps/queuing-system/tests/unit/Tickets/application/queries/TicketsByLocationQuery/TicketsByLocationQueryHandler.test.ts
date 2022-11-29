/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { TicketsByLocationQueryHandler } from '../../../../../../src/Tickets/application/queries/TicketsByLocationQuery'
import { TicketsReadableRepo } from '../../../__mocks__/TicketsReadableRepo'
import { TicketsByLocationQueryMother } from './TicketsByLocationQueryMother'

let repository: TicketsReadableRepo
let handler: TicketsByLocationQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsWaitingForServiceQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new TicketsByLocationQueryHandler(repository)
  })

  it('should get a collection of existing tickets', async () => {
    const query = TicketsByLocationQueryMother.random()

    await handler.execute(query)

    repository.assertFindHasBeenCalled()
  })
})
