/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { SearchTicketsForServingFromLocationQueryHandler } from '../../../../src/tickets/search-tickets-for-serving-from-location'
import { TicketsReadableRepo } from '../shared/tickets-readable.repo'
import { SearchTicketsForServingFromLocationQueryMother } from './search-tickets-for-serving-from-location.query.mother'

let repository: TicketsReadableRepo
let handler: SearchTicketsForServingFromLocationQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsWaitingForServiceQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new SearchTicketsForServingFromLocationQueryHandler(repository)
  })

  it('should get a collection of existing tickets', async () => {
    const query = SearchTicketsForServingFromLocationQueryMother.random()

    await handler.execute(query)

    repository.assertFindHasBeenCalled()
  })
})
