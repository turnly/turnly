/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../../src/Tickets/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { TicketsFactory } from '../../../../../../src/Tickets/infrastructure/factories/TicketsFactory'
import { TicketMother } from '../../../../../unit/Tickets/shared/domain/TicketMother'
import { TicketsQueryMother } from './TicketsQueryMother'

const writableRepo = TicketsFactory.getWritableRepo()
const readableRepo = TicketsFactory.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('tickets > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random ticket to mongo database', async () => {
    const ticket = TicketMother.random()

    await writableRepo.save(ticket)
  })

  it('should persist multiple tickets using bulk insert to mongo database', async () => {
    const tickets = TicketMother.collection()

    await writableRepo.save(tickets)
  })

  it('should retrieve a existing ticket using getOne()', async () => {
    const ticket = TicketMother.random()

    await writableRepo.save(ticket)

    const persisted = await readableRepo.getOne(
      TicketsQueryMother.getOneWith(ticket)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = ticket.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple tickets using find()', async () => {
    const tickets = TicketMother.collection()

    await writableRepo.save(tickets)

    const persisted = await readableRepo.find(
      TicketsQueryMother.getManyIn(tickets)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(tickets.length)
  })

  it('should not retrieve a non-existing ticket using getOne()', async () => {
    const ticket = await readableRepo.getOne(
      TicketsQueryMother.getOneWith(TicketMother.random())
    )

    expect(ticket).toBeNull()
  })
})
