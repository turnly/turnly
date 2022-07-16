/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ActiveTicketsByCustomerQueryHandler } from '../../../../../../src/Tickets/application/queries/ActiveTicketsByCustomerQuery'
import { TicketsReadableRepo } from '../../../__mocks__/TicketsReadableRepo'
import { TicketMother } from '../../../domain/TicketMother'
import { ActiveTicketsByCustomerQueryMother } from './ActiveTickesByCustomerQueryMother'

let repository: TicketsReadableRepo
let handler: ActiveTicketsByCustomerQueryHandler

describe('tickets > queries > validates the expected behavior of TicketsBeforeYoursQuery', () => {
  beforeEach(() => {
    repository = new TicketsReadableRepo()
    handler = new ActiveTicketsByCustomerQueryHandler(repository)
  })

  it('should get a collection of active tickets by customer', async () => {
    const query = ActiveTicketsByCustomerQueryMother.random()

    const expected = ObjectMother.repeater(TicketMother.random, 20)

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    repository.assertFindHasBeenCalled()
    expect(response).toEqual(expected)
  })
})
