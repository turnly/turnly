/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { GetAnUnexpiredTicketQuery } from 'tickets/get-an-unexpired-ticket/get-an-unexpired-ticket.query'
import { ITicketsWritableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { AnnounceMyArrivalCommand } from './announce-my-arrival.command'

@CommandHandler(AnnounceMyArrivalCommand)
export class AnnounceMyArrivalCommandHandler
  implements ICommandHandler<AnnounceMyArrivalCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute(command: AnnounceMyArrivalCommand) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      GetAnUnexpiredTicketQuery.build(command)
    )

    if (!ticket || !ticket.isOwnedBy(command.customerId))
      throw new ResourceNotFoundException()

    /**
     * TODO: Implement the logic to validate the device location of the customer
     */

    ticket.announce()

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }
}
