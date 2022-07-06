/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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

import { AnnounceTicketCommand } from './AnnounceTicketCommand'

@CommandHandler(AnnounceTicketCommand)
export class AnnounceTicketCommandHandler
  implements ICommandHandler<AnnounceTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ params }: AnnounceTicketCommand) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new TicketByIdQuery(params.id, params.customerId, params.organizationId)
    )

    if (!ticket) throw new ResourceNotFoundException()

    /**
     * @todo Implement the logic to validate the device location of the customer
     */

    ticket.announce()

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }
}
