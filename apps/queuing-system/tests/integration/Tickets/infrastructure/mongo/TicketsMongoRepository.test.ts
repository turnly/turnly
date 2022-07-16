/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import '../../../../../src/Tickets/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { TicketsFactory } from '../../../../../src/Tickets/infrastructure/factories/TicketsFactory'
import { TicketMother } from '../../../../unit/Tickets/domain/TicketMother'
import { TicketsQueryMother } from './TicketsQueryMother'

const writableRepo = TicketsFactory.getWritableRepo()
const readableRepo = TicketsFactory.getReadableRepo()
const mongoArranger = new MongoEnvironmentArranger()

describe('tickets > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => mongoArranger.arrange())
  afterEach(async () => mongoArranger.arrange())
  afterAll(async () => mongoArranger.close())

  it('should persist a ticket and retrieve it from the database', async () => {
    const ticket = TicketMother.random()

    await writableRepo.save(ticket)

    const persisted = await readableRepo.getOne(
      TicketsQueryMother.getOneWith(ticket)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = ticket.toObject()

    expect(attributes.id).toEqual(expected.id)
    expect(attributes.createdAt).toBeDefined()
  })

  it('should persist multiple tickets using bulk insert and retrieve them from the database', async () => {
    const tickets = TicketMother.collection()

    await writableRepo.save(tickets)

    const persisted = await readableRepo.find(
      TicketsQueryMother.getManyIn(tickets)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(tickets.length)
  })
})
