import { CommandHandler, ICommandHandler } from '@turnly/shared'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { SaveTicketReadingDBCommand } from './SaveTicketReadingDBCommand'

@CommandHandler(SaveTicketReadingDBCommand)
export class SaveTicketReadingDBCommandHandler
  implements ICommandHandler<SaveTicketReadingDBCommand, void>
{
  public constructor(
    private readonly ticketWritableElasticRepository: ITicketWritableRepository
  ) {}

  public async execute({ payload }: SaveTicketReadingDBCommand) {
    const ticket = Ticket.build(payload)

    await this.ticketWritableElasticRepository.save(ticket)
  }
}
