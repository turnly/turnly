/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ConflictException } from '@turnly/common'
import { TestEventBus, TestQueryBus } from '@turnly/testing'

import { CreateTicketCommandHandler } from '../../../../../../src/Tickets/application/commands/CreateTicketCommand'
import { TicketsWritableRepo } from '../../../__mocks__/TicketsWritableRepo'
import { TicketMother } from '../../../domain/TicketMother'
import { CreateTicketCommandMother } from './CreateTicketCommandMother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: CreateTicketCommandHandler

describe('tickets > commands > validates the expected behavior on ticket creation', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new CreateTicketCommandHandler(eventBus, queryBus, repository)
  })

  it('should create a ticket if the customer has no created a tickets for an hour', async () => {
    queryBus.attachAskResponse([])

    const command = CreateTicketCommandMother.random()
    const ticket = await handler.execute(command)

    repository.assertLastSavedIs(ticket)
    eventBus.assertPublishCalled()
  })

  it('should throw a conflict exception if the customer has created a ticket for an hour', async () => {
    queryBus.attachAskResponse([TicketMother.random(), TicketMother.random()])

    const command = CreateTicketCommandMother.random()

    await expect(handler.execute(command)).rejects.toThrow(ConflictException)

    repository.assertNothingSaved()
    eventBus.assertNothingPublished()
  })
})
