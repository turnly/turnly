/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { GetAnUnexpiredTicketQuery } from 'Tickets/shared/application/queries/get-an-unexpired-ticket'
import { ITicketsWritableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ReturnTicketToQueueCommand } from './return-ticket-to-queue.command'

@CommandHandler(ReturnTicketToQueueCommand)
export class ReturnTicketToQueueCommandHandler
  implements ICommandHandler<ReturnTicketToQueueCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ params }: ReturnTicketToQueueCommand) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new GetAnUnexpiredTicketQuery(params)
    )

    if (!ticket) throw new ResourceNotFoundException()

    ticket.returnToQueue()

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }
}
