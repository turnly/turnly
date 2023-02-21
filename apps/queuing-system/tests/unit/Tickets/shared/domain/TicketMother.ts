/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { TicketSource } from 'Tickets/Shared/domain/enums/TicketSource'

import { AnnounceTicketCommand } from '../../../../../src/Tickets/AnnounceTicket'
import { CreateTicketCommand } from '../../../../../src/Tickets/CreateTicket'
import { GetOneTicketQuery } from '../../../../../src/Tickets/get-one-ticket'
import { LeaveTicketCommand } from '../../../../../src/Tickets/LeaveTicket'
import { Rating } from '../../../../../src/Tickets/Shared/domain/entities/Rating'
import { Ticket } from '../../../../../src/Tickets/Shared/domain/entities/Ticket'
import { TicketPriority } from '../../../../../src/Tickets/Shared/domain/enums/TicketPriority'
import { TicketScore } from '../../../../../src/Tickets/Shared/domain/enums/TicketScore'
import { TicketStatus } from '../../../../../src/Tickets/Shared/domain/enums/TicketStatus'

export class TicketMother {
  static create(
    status: TicketStatus = TicketStatus.AVAILABLE,
    priority: TicketPriority = TicketPriority.NORMAL,
    source: TicketSource = TicketSource.FROM_SYSTEM,
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
      source,
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

  static fromExistingTicketOnQuery(query: GetOneTicketQuery): Ticket {
    return Ticket.build({
      ...this.random().toObject(),
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

  static inCalledStatus(): Ticket {
    const ticket = TicketMother.create(TicketStatus.ANNOUNCED)

    /**
     * Pull creation event first to clear the array of events
     */
    ticket.pull()

    return ticket
  }

  static inRecalledStatus(): Ticket {
    const ticket = TicketMother.create(TicketStatus.CALLED)

    /**
     * Pull creation event first to clear the array of events
     */
    ticket.pull()

    return ticket
  }

  static inPendingForRatingStatus(): Ticket {
    const ticket = TicketMother.create(TicketStatus.SERVED)

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
      undefined,
      extra
    )
  }

  static withStaticExtra(
    extra: Extra[] = [
      { key: 'comment', value: 'Ben Spinka' },
      { key: 'password', value: 'Ivan Heaney' },
      { key: 'createdAt', value: 'Dwayne Kassulke' },
    ]
  ): Ticket {
    return this.withExtra(extra)
  }
}
