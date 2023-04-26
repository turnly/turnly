/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { ITicketsMapper } from 'tickets/shared/domain/contracts/tickets-mapper.interface'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ITicketDocument, TicketModel } from './ticket.model'

export class TicketsReadableRepo
  extends MongoReadableRepo<Ticket, ITicketDocument>
  implements ITicketsReadableRepo
{
  public constructor(ticketsMapper: ITicketsMapper<ITicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
