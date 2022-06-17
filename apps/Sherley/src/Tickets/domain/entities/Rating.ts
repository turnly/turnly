import { Nullable } from '@turnly/common'

import { TicketScore } from '../enums/TicketScore'

/**
 * Rating
 *
 * @description The Customer's rating for the experience at the Location.
 */
export class Rating {
  public constructor(
    public readonly score: TicketScore,
    public readonly comment: Nullable<string>
  ) {}
}
