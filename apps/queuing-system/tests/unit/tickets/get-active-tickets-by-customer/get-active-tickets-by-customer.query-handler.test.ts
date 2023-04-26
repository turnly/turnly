/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { GetActiveTicketsByCustomerQueryHandler } from '../../../../src/tickets/get-active-tickets-by-customer/get-active-tickets-by-customer.query-handler'
import { TicketMother } from '../shared/ticket.entity.mother'
import { TicketsReadableRepo } from '../shared/tickets-readable.repo'
import { GetActiveTicketsByCustomerQueryMother } from './get-active-tickets-by-customer.query.mother'

let repository: TicketsReadableRepo
let handler: GetActiveTicketsByCustomerQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsBeforeYoursQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new GetActiveTicketsByCustomerQueryHandler(repository)
  })

  it('should get a collection of active tickets by customer', async () => {
    const query = GetActiveTicketsByCustomerQueryMother.random()

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
