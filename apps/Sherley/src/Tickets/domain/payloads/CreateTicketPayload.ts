import { EntityAttributes } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

type IgnoreAttrs =
  | 'id'
  | 'status'
  | 'displayCode'
  | 'assignedToId'
  | 'createdAt'

export type CreateTicketPayload = Omit<EntityAttributes<Ticket>, IgnoreAttrs>
