/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/observability'
import { TestEventBus, TestQueryBus } from '@turnly/testing'

import { AnnounceMyArrivalCommandHandler } from '../../../../src/tickets/announce-my-arrival'
import { TicketStatus } from '../../../../src/tickets/shared/domain/enums/ticket-status.enum'
import { TicketMother } from '../shared/ticket.entity.mother'
import { TicketsWritableRepo } from '../shared/tickets-writable.repo'
import { AnnounceMyArrivalCommandMother } from './announce-my-arrival.command.mother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: AnnounceMyArrivalCommandHandler

describe('tickets > commands > validates the expected behavior when a ticket is announce', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new AnnounceMyArrivalCommandHandler(
      eventBus,
      queryBus,
      repository
    )
  })

  it('should announce an existing ticket', async () => {
    const command = AnnounceMyArrivalCommandMother.random()

    let ticket = TicketMother.fromExistingTicketOnCommand(command)
    queryBus.attachAskResponse(ticket)

    ticket = await handler.execute(command)

    const { status } = ticket.toObject()
    expect(status).toEqual(TicketStatus.ANNOUNCED)

    repository.assertLastSavedIs(ticket)
    eventBus.assertPublishCalled()
  })

  it('should throw a ResourceNotFoundException when the ticket does not exist', async () => {
    const command = AnnounceMyArrivalCommandMother.random()

    queryBus.attachAskResponse(null)

    await expect(handler.execute(command)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertNothingSaved()
    eventBus.assertNothingPublished()
  })
})
