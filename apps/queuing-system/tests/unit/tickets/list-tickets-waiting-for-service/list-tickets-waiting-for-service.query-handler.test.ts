/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { ListTicketsWaitingForServiceQueryHandler } from '../../../../src/tickets/list-tickets-waiting-for-service'
import { TicketsReadableRepo } from '../shared/__mocks__/tickets-readable.repo'
import { ListTicketsWaitingForServiceQueryMother } from './list-tickets-waiting-for-service.query.mother'

let repository: TicketsReadableRepo
let handler: ListTicketsWaitingForServiceQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsWaitingForServiceQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new ListTicketsWaitingForServiceQueryHandler(repository)
  })

  it('should get a collection of existing tickets', async () => {
    const query = ListTicketsWaitingForServiceQueryMother.random()

    await handler.execute(query)

    repository.assertFindHasBeenCalled()
  })
})
