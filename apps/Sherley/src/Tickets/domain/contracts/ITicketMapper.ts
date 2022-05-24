import { IEntityMapper } from '@turnly/core'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export type ITicketMapper<Model> = IEntityMapper<Ticket, Model>
