/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { TicketsForServingFromLocationQueryHandler } from '../../../../src/Tickets/TicketsForServingFromLocation'
import { TicketsReadableRepo } from '../shared/__mocks__/TicketsReadableRepo'
import { TicketsForServingFromLocationQueryMother } from './TicketsForServingFromLocationQueryMother'

let repository: TicketsReadableRepo
let handler: TicketsForServingFromLocationQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsWaitingForServiceQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new TicketsForServingFromLocationQueryHandler(repository)
  })

  it('should get a collection of existing tickets', async () => {
    const query = TicketsForServingFromLocationQueryMother.random()

    await handler.execute(query)

    repository.assertFindHasBeenCalled()
  })
})
