import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { CreateTicketCommand } from './CreateTicketCommand'

@CommandHandler(CreateTicketCommand)
export class CreateTicketCommandHandler
  implements ICommandHandler<CreateTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly ticketsWritableRepository: ITicketWritableRepository
  ) {}

  public async execute({
    params: { payload, publishEventsInstantly },
  }: CreateTicketCommand) {
    const ticket = Ticket.create(payload)

    await this.ticketsWritableRepository.save(ticket)

    if (publishEventsInstantly) this.eventBus.publish(ticket.pull())

    return ticket
  }
}
