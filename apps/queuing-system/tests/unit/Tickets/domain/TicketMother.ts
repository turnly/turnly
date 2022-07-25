/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { AnnounceTicketCommand } from '../../../../src/Tickets/application/commands/AnnounceTicketCommand'
import { CreateTicketCommand } from '../../../../src/Tickets/application/commands/CreateTicketCommand'
import { LeaveTicketCommand } from '../../../../src/Tickets/application/commands/LeaveTicketCommand'
import { TicketByIdQuery } from '../../../../src/Tickets/application/queries/TicketByIdQuery'
import { Rating } from '../../../../src/Tickets/domain/entities/Rating'
import { Ticket } from '../../../../src/Tickets/domain/entities/Ticket'
import { TicketPriority } from '../../../../src/Tickets/domain/enums/TicketPriority'
import { TicketScore } from '../../../../src/Tickets/domain/enums/TicketScore'
import { TicketStatus } from '../../../../src/Tickets/domain/enums/TicketStatus'

export class TicketMother {
  static create(
    status: TicketStatus = TicketStatus.BOOKED,
    priority: TicketPriority = TicketPriority.NORMAL,
    displayCode: string = ObjectMother.displayCode('TEST'),
    serviceId: Guid = ObjectMother.uuid('srv'),
    locationId: Guid = ObjectMother.uuid('loc'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org'),
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

  static collection(max = ObjectMother.integer(2)): Ticket[] {
    return ObjectMother.repeater(TicketMother.random, max)
  }

  static random(): Ticket {
    return TicketMother.create()
  }

  static randomRating(): Rating {
    return new Rating(TicketScore.GOOD, ObjectMother.paragraph())
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

  static fromExistingTicketOnCommand(
    command: LeaveTicketCommand | AnnounceTicketCommand
  ): Ticket {
    return Ticket.build({
      ...this.random().toObject(),
      status: TicketStatus.AVAILABLE,
      customerId: command.params.customerId,
      organizationId: command.params.organizationId,
      id: command.params.id,
    })
  }

  static fromExistingTicketOnQuery(query: TicketByIdQuery): Ticket {
    return Ticket.build({
      ...this.random().toObject(),
      customerId: query.customerId,
      organizationId: query.organizationId,
      id: query.id,
    })
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

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Ticket {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
