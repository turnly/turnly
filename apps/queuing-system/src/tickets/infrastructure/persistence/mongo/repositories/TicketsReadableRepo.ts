/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { ITicketsMapper } from 'tickets/shared/domain/contracts/ITicketsMapper'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ITicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsReadableRepo
  extends MongoReadableRepo<Ticket, ITicketDocument>
  implements ITicketsReadableRepo
{
  public constructor(ticketsMapper: ITicketsMapper<ITicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
