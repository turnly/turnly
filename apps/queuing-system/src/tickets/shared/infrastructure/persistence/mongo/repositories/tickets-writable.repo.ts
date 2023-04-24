/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { ITicketsMapper } from 'tickets/shared/domain/contracts/tickets-mapper.interface'
import { ITicketsWritableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ITicketDocument, TicketModel } from '../models/ticket.model'

export class TicketsWritableRepo
  extends MongoWritableRepo<Ticket, ITicketDocument>
  implements ITicketsWritableRepo
{
  public constructor(ticketsMapper: ITicketsMapper<ITicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
