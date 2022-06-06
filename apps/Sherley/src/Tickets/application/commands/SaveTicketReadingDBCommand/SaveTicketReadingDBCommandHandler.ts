import { CommandHandler, ICommandHandler } from '@turnly/shared'
import { ITicketWritableRepo } from 'Tickets/domain/contracts/ITicketRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { SaveTicketReadingDBCommand } from './SaveTicketReadingDBCommand'

@CommandHandler(SaveTicketReadingDBCommand)
export class SaveTicketReadingDBCommandHandler
  implements ICommandHandler<SaveTicketReadingDBCommand, void>
{
  public constructor(
    private readonly ticketWritableElasticRepo: ITicketWritableRepo
  ) {}

  public async execute({ payload }: SaveTicketReadingDBCommand) {
    const ticket = Ticket.build(payload)

    await this.ticketWritableElasticRepo.save(ticket)
  }
}
