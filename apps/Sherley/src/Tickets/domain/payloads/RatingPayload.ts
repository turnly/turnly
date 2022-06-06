import type { Nullable } from '@turnly/common'

import type { TicketScore } from '../enums/TicketScore'

export type RatingPayload = {
  score: TicketScore
  comment: Nullable<string>
}
