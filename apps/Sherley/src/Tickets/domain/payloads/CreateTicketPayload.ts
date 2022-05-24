import { EntityAttributes } from '@turnly/core'

import { Ticket } from '../entities/Ticket'

export type CreateTicketPayload = Omit<
  EntityAttributes<Ticket>,
  'id' | 'status' | 'displayCode'
>
