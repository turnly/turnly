import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
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
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ payload }: CreateTicketCommand) {
    const ticket = Ticket.create({
      ...payload,
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
