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
import { TicketByIdQuery } from 'Tickets/application/queries/TicketByIdQuery'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ResolveTicketCommand } from './ResolveTicketCommand'

@CommandHandler(ResolveTicketCommand)
export class ResolveTicketCommandHandler
  implements ICommandHandler<ResolveTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ params }: ResolveTicketCommand) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new TicketByIdQuery(params.id, params.organizationId)
    )

    if (!ticket) throw new ResourceNotFoundException()

    ticket.resolve(params.status)

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }
}
