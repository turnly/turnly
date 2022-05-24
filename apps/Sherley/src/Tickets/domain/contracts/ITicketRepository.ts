import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Ticket } from '../entities/Ticket'

export type ITicketReadableRepository = IReadableRepository<Ticket>
export type ITicketWritableRepository = IWritableRepository<Ticket>
