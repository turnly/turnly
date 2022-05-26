import { EntityAttributes } from '@turnly/core'

import { Ticket } from '../entities/Ticket'

type AdditionalData = {
  answers?: {
    fieldId: string
    value: string
  }[]
}

export type CreateTicketPayload = AdditionalData &
  Omit<EntityAttributes<Ticket>, 'id' | 'status' | 'displayCode'>
