/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { TicketsWaitingForServiceQueryHandler } from '../../../../../../src/Tickets/application/queries/TicketsWaitingForServiceQuery'
import { TicketsReadableRepo } from '../../../__mocks__/TicketsReadableRepo'
import { TicketsWaitingForServiceQueryMother } from './TicketsWaitingForServiceQueryMother'

let repository: TicketsReadableRepo
let handler: TicketsWaitingForServiceQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsWaitingForServiceQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new TicketsWaitingForServiceQueryHandler(repository)
  })

  it('should get a collection of existing tickets', async () => {
    const query = TicketsWaitingForServiceQueryMother.random()

    await handler.execute(query)

    repository.assertFindHasBeenCalled()
  })
})
