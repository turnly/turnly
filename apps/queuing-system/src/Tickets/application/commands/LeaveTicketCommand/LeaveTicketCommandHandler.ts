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
    const ticket = await this.queryBus.ask<TicketByIdQuery, Nullable<Ticket>>(
      new TicketByIdQuery(params.id, params.customerId, params.companyId)
    )

    if (!ticket) throw new ResourceNotFoundException()

    ticket.leave()

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }
}
