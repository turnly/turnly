/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import '../../../../../src/Tickets/infrastructure/register-dependencies/dependencies'

import { MongoEnvironmentArranger } from '@turnly/shared'

import { TicketsFactory } from '../../../../../src/Tickets/infrastructure/factories/TicketsFactory'
import { TicketMother } from '../../../../unit/Tickets/domain/TicketMother'

const repository = TicketsFactory.getWritableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('tickets > infrastructure > mongo > validates the expected behavior of TicketsWritableRepo', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random ticket to mongo database', async () => {
    const ticket = TicketMother.random()

    await repository.save(ticket)
  })

  it('should persist multiple tickets using bulk insert to mongo database', async () => {
    const tickets = TicketMother.collection()

    await repository.save(tickets)
  })
})
