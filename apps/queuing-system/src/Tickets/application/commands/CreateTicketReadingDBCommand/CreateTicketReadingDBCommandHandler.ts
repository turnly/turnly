import { CommandHandler, ICommandHandler } from '@turnly/shared'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { CreateTicketReadingDBCommand } from './CreateTicketReadingDBCommand'

@CommandHandler(CreateTicketReadingDBCommand)
export class CreateTicketReadingDBCommandHandler
  implements ICommandHandler<CreateTicketReadingDBCommand, void>
{
  public constructor(
    private readonly ticketsWritableForReadableRepo: ITicketsWritableRepo
  ) {}

  public async execute({ payload }: CreateTicketReadingDBCommand) {
    const ticket = Ticket.build(payload)

    await this.ticketsWritableForReadableRepo.save(ticket)
  }
}