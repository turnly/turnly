import { IEntityMapper } from '@turnly/core'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument } from '../../infrastructure/persistence/mongo/models/TicketModel'

export type ITicketMapper = IEntityMapper<Ticket, TicketDocument>
