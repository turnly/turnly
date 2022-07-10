/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'

import { LeaveTicketCommandHandler } from '../../../../../../src/Tickets/application/commands/LeaveTicketCommand'
import { TestEventBus } from '../../../../../shared/__mocks__/TestEventBus'
import { TestQueryBus } from '../../../../../shared/__mocks__/TestQueryBus'
import { TicketsWritableRepo } from '../../../__mocks__/TicketsWritableRepo'
import { TicketMother } from '../../../domain/TicketMother'
import { LeaveTicketCommandMother } from './LeaveTicketCommandMother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: LeaveTicketCommandHandler

describe('tickets > application > validates the expected behavior when a ticket is cancelled', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new LeaveTicketCommandHandler(eventBus, queryBus, repository)
  })

  it('should leave a existing ticket', async () => {
    const command = LeaveTicketCommandMother.random()

    const ticket = TicketMother.fromLeaveTicketCommand(command)

    queryBus.attachAskResponse(ticket)

    await handler.execute(command)

    repository.assertLastSavedEntityIs(ticket)
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
