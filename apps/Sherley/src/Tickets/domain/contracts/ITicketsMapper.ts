import { IEntityMapper } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export type ITicketMapper<Model> = IEntityMapper<Ticket, Model>
