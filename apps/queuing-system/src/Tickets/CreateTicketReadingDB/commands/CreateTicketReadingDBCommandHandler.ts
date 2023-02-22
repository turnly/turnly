/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler } from '@turnly/shared'
import { ITicketsWritableRepo } from 'Tickets/Shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

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
