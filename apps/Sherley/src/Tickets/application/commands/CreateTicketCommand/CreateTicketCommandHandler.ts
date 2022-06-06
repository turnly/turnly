import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { ITicketWritableRepo } from 'Tickets/domain/contracts/ITicketRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { CreateTicketCommand } from './CreateTicketCommand'

@CommandHandler(CreateTicketCommand)
export class CreateTicketCommandHandler
  implements ICommandHandler<CreateTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly ticketsWritableRepo: ITicketWritableRepo
  ) {}

  public async execute({
    params: { payload, publishEventsInstantly },
  }: CreateTicketCommand) {
    const ticket = Ticket.create(payload)

    await this.ticketsWritableRepo.save(ticket)

    if (publishEventsInstantly) this.eventBus.publish(ticket.pull())

    return ticket
  }
}
