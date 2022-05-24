import { EntityAttributes, IUseCase } from '@turnly/core'

import { Ticket } from '../../entities/Ticket'

export type TakeTicketPayload = Omit<EntityAttributes<Ticket>, 'id' | 'status'>

export type ITakeTicketUseCase = IUseCase<TakeTicketPayload, Ticket>
