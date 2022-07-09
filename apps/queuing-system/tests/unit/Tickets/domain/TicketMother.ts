/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'

import { CreateTicketCommand } from '../../../../src/Tickets/application/commands/CreateTicketCommand'
import { Rating } from '../../../../src/Tickets/domain/entities/Rating'
import { Ticket } from '../../../../src/Tickets/domain/entities/Ticket'
import { TicketPriority } from '../../../../src/Tickets/domain/enums/TicketPriority'
import { TicketScore } from '../../../../src/Tickets/domain/enums/TicketScore'
import { TicketStatus } from '../../../../src/Tickets/domain/enums/TicketStatus'
import { MotherObject } from '../../../shared/MotherObject'

export class TicketMother {
  static create(
    status: TicketStatus = TicketStatus.BOOKED,
    priority: TicketPriority = TicketPriority.NORMAL,
    displayCode: string = MotherObject.displayCode('TEST'),
    serviceId: Guid = MotherObject.uuid('srv'),
    locationId: Guid = MotherObject.uuid('loc'),
    customerId: Guid = MotherObject.uuid('cust'),
    organizationId: Guid = MotherObject.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Ticket {
    return Ticket.create({
      status,
      priority,
      displayCode,
      serviceId,
      locationId,
      customerId,
      organizationId,
      extra,
    })
  }

  static random(): Ticket {
    return TicketMother.create()
  }

  static randomRating(): Rating {
    return new Rating(TicketScore.GOOD, MotherObject.paragraph())
  }

  static fromCommand(command: CreateTicketCommand): Ticket {
    return TicketMother.create(
      undefined,
      undefined,
      undefined,
      command.params.serviceId,
      command.params.locationId,
      command.params.customerId,
      command.params.organizationId,
      command.params.extra
    )
  }

  static inAvailableStatus(): Ticket {
    const ticket = TicketMother.create(TicketStatus.AVAILABLE)

    /**
     * Pull creation event first to clear the array of events
     */
    ticket.pull()

    return ticket
  }

  static inPendingForRatingStatus(): Ticket {
    const ticket = TicketMother.create(TicketStatus.COMPLETED_WITHOUT_RATING)

    /**
     * Pull creation event first to clear the array of events
     */
    ticket.pull()

    return ticket
  }
}
