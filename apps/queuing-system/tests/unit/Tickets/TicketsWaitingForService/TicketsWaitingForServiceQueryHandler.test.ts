/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { GetTicketsWaitingForServiceQueryHandler } from '../../../../src/Tickets/get-tickets-waiting-for-service'
import { TicketsReadableRepo } from '../shared/__mocks__/TicketsReadableRepo'
import { GetTicketsWaitingForServiceQueryMother } from './TicketsWaitingForServiceQueryMother'

let repository: TicketsReadableRepo
let handler: GetTicketsWaitingForServiceQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsWaitingForServiceQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new GetTicketsWaitingForServiceQueryHandler(repository)
  })

  it('should get a collection of existing tickets', async () => {
    const query = GetTicketsWaitingForServiceQueryMother.random()

    await handler.execute(query)

    repository.assertFindHasBeenCalled()
  })
})
