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
} from '@turnly/shared'
import { GetAnUnexpiredTicketQuery } from 'tickets/shared/application/queries/GetAnUnexpiredTicketQuery/GetAnUnexpiredTicketQuery'
import { ITicketsWritableRepo } from 'tickets/shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { LeaveTicketCommand } from './LeaveTicketCommand'

@CommandHandler(LeaveTicketCommand)
export class LeaveTicketCommandHandler
  implements ICommandHandler<LeaveTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ params }: LeaveTicketCommand) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new GetAnUnexpiredTicketQuery(params)
    )

    if (!ticket || !ticket.isOwnedBy(params.customerId))
      throw new ResourceNotFoundException()

    ticket.leave()

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }
}
