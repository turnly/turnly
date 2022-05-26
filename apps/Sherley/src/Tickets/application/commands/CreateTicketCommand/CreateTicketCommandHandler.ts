import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/core'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

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
    const ticket = Ticket.create({
      ...payload,
      status: TicketStatus.BOOKED,
      /**
       * @todo Create function to get the next ticket number
       */
      displayCode: Date.now().toString(),
    })

    await this.ticketsWritableRepository.save(ticket)

    if (publishEventsInstantly) this.eventBus.publish(ticket.pull())

    return ticket
  }
}
