/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ActiveTicketsByCustomerQueryHandler } from '../../../../src/etickets/eshared/application/queries'
import { TicketsReadableRepo } from '../shared/__mocks__/TicketsReadableRepo'
import { TicketMother } from '../shared/domain/TicketMother'
import { ActiveTicketsByCustomerQueryMother } from './ActiveTicketsByCustomerQueryMother'

let repository: TicketsReadableRepo
let handler: ActiveTicketsByCustomerQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsBeforeYoursQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new ActiveTicketsByCustomerQueryHandler(repository)
  })

  it('should get a collection of active tickets by customer', async () => {
    const query = ActiveTicketsByCustomerQueryMother.random()

    const expected = ObjectMother.repeater(
      TicketMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    repository.assertFindHasBeenCalled()
    expect(response).toEqual(expected)
  })
})
