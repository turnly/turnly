import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

export type ITicketsReadableRepo = IReadableRepository<Ticket>
export type ITicketsWritableRepo = IWritableRepository<Ticket>
