import { ConflictException, Nullable } from '@turnly/common'
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/shared'
import { GetActiveTicketsByCustomerQuery } from 'Tickets/application/queries/GetActiveTicketsByCustomerQuery'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketPriority } from 'Tickets/domain/enums/TicketPriority'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

import { CreateTicketCommand } from './CreateTicketCommand'

@CommandHandler(CreateTicketCommand)
export class CreateTicketCommandHandler
  implements ICommandHandler<CreateTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ params }: CreateTicketCommand) {
    const tickets = await this.queryBus.ask<
      GetActiveTicketsByCustomerQuery,
      Nullable<Ticket[]>
    >(
      new GetActiveTicketsByCustomerQuery({
        customerId: params.customerId,
        companyId: params.companyId,
      })
    )

    if (tickets)
      throw new ConflictException(
        'Customer already has tickets, cannot create new ticket.'
      )

    const ticket = Ticket.create({
      ...params,
      status: TicketStatus.BOOKED,
      priority: TicketPriority.NORMAL,
      displayCode: await this.generateDisplayCode(),
    })

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }

  private async generateDisplayCode() {
    /**
     * @todo Create a unique display code generator. This is a temporary solution.
     */
    return new Date().toTimeString()
  }
}
