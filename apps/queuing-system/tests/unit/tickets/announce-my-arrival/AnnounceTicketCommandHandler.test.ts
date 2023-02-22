/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { TestEventBus, TestQueryBus } from '@turnly/testing'

import { AnnounceTicketCommandHandler } from '../../../../src/tickets/announce-my-arrival'
import { TicketStatus } from '../../../../src/tickets/shared/domain/enums/TicketStatus'
import { TicketsWritableRepo } from '../shared/__mocks__/TicketsWritableRepo'
import { TicketMother } from '../shared/domain/TicketMother'
import { AnnounceTicketCommandMother } from './AnnounceTicketCommandMother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: AnnounceTicketCommandHandler

describe('tickets > commands > validates the expected behavior when a ticket is announce', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new AnnounceTicketCommandHandler(eventBus, queryBus, repository)
  })

  it('should announce an existing ticket', async () => {
    const command = AnnounceTicketCommandMother.random()

    let ticket = TicketMother.fromExistingTicketOnCommand(command)
    queryBus.attachAskResponse(ticket)

    ticket = await handler.execute(command)

    const { status } = ticket.toObject()
    expect(status).toEqual(TicketStatus.ANNOUNCED)

    repository.assertLastSavedIs(ticket)
    eventBus.assertPublishCalled()
  })

  it('should throw a ResourceNotFoundException when the ticket does not exist', async () => {
    const command = AnnounceTicketCommandMother.random()

    queryBus.attachAskResponse(null)

    await expect(handler.execute(command)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertNothingSaved()
    eventBus.assertNothingPublished()
  })
})
