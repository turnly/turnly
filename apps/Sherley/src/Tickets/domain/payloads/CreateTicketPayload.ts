import { EntityAttributes } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

type IgnoreAttrs = 'id' | 'assigneeId' | 'createdAt' | 'rating'

export type CreateTicketPayload = Omit<EntityAttributes<Ticket>, IgnoreAttrs>
