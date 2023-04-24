/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { TestEventBus, TestQueryBus } from '@turnly/testing'

import { LeaveTheQueueCommandHandler } from '../../../../src/tickets/leave-the-queue'
import { TicketStatus } from '../../../../src/tickets/shared/domain/enums/TicketStatus'
import { TicketsWritableRepo } from '../shared/__mocks__/tickets-writable.repo'
import { TicketMother } from '../shared/domain/ticket.entity.mother'
import { LeaveTheQueueCommandMother } from './leave-the-queue.command.mother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: LeaveTheQueueCommandHandler

describe('tickets > commands > validates the expected behavior when a ticket is cancelled', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new LeaveTheQueueCommandHandler(eventBus, queryBus, repository)
  })

  it('should leave an existing ticket', async () => {
    const command = LeaveTheQueueCommandMother.random()

    let ticket = TicketMother.fromExistingTicketOnCommand(command)

    queryBus.attachAskResponse(ticket)

    ticket = await handler.execute(command)

    const { status } = ticket.toObject()
    expect(status).toEqual(TicketStatus.CANCELLED)

    repository.assertLastSavedIs(ticket)
    eventBus.assertPublishCalled()
  })

  it('should throw a ResourceNotFoundException when the ticket does not exist', async () => {
    const command = LeaveTheQueueCommandMother.random()

    queryBus.attachAskResponse(null)

    await expect(handler.execute(command)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertNothingSaved()
    eventBus.assertNothingPublished()
  })
})
