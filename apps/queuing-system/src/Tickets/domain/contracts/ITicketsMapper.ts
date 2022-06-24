import { IEntityMapper } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export type ITicketsMapper<Model> = IEntityMapper<Ticket, Model>
