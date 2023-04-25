/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import type { Guid } from '@turnly/common'
import { WithExtraQuery } from '@turnly/core'
import { EntityTypes } from 'answers/shared/domain/enums/entity-type.enum'

export class ListAnswersByFieldQuery extends WithExtraQuery {
  public readonly entityType: EntityTypes
  public readonly fieldId?: Guid
}
