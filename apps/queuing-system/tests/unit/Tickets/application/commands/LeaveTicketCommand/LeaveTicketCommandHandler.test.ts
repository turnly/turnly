/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { TestEventBus, TestQueryBus } from '@turnly/testing'

import { LeaveTicketCommandHandler } from '../../../../../../src/Tickets/application/commands/LeaveTicketCommand'
import { TicketStatus } from '../../../../../../src/Tickets/domain/enums/TicketStatus'
import { TicketsWritableRepo } from '../../../__mocks__/TicketsWritableRepo'
import { TicketMother } from '../../../domain/TicketMother'
import { LeaveTicketCommandMother } from './LeaveTicketCommandMother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: LeaveTicketCommandHandler

describe('tickets > commands > validates the expected behavior when a ticket is cancelled', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new LeaveTicketCommandHandler(eventBus, queryBus, repository)
  })

  it('should leave an existing ticket', async () => {
    const command = LeaveTicketCommandMother.random()

    let ticket = TicketMother.fromExistingTicketOnCommand(command)

    queryBus.attachAskResponse(ticket)

    ticket = await handler.execute(command)

    const { status } = ticket.toObject()
    expect(status).toEqual(TicketStatus.CANCELLED)

    repository.assertLastSavedIs(ticket)
    eventBus.assertPublishCalled()
  })

  it('should throw a ResourceNotFoundException when the ticket does not exist', async () => {
    const command = LeaveTicketCommandMother.random()

    queryBus.attachAskResponse(null)

    await expect(handler.execute(command)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertNothingSaved()
    eventBus.assertNothingPublished()
  })
})
