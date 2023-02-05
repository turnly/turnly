/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import type { Extra, Guid } from '@turnly/common'
import type { IQuery } from '@turnly/shared'
import { EntityTypes } from 'Answers/domain/enums/EntityType'

export class FindAnswersQuery implements IQuery {
  public constructor(
    public readonly organizationId: Guid,
    public readonly entityType: EntityTypes,
    public readonly fieldId?: Guid,
    public readonly extra?: Extra[]
  ) {}
}
