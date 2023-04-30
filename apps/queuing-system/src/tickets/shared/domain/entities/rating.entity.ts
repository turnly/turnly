/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'

import { TicketScore } from '../enums/ticket-score.enum'

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
