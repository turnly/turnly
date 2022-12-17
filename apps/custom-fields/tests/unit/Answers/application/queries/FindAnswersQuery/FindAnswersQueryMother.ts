/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { EntityTypes } from 'Answers/domain/enums/EntityType'

import { FindAnswersQuery } from '../../../../../../src/Answers/application/queries/FindAnswersQuery'

export class FindAnswersQueryMother {
  static create(
    entityType: EntityTypes = EntityTypes.CUSTOMER,
    fieldId: Guid = ObjectMother.uuid('field'),
    extra: Extra[] = ObjectMother.repeater(ObjectMother.extra, 1),
    organizationId: Guid = ObjectMother.uuid('org')
  ): FindAnswersQuery {
    return new FindAnswersQuery(organizationId, entityType, fieldId, extra)
  }

  static random(): FindAnswersQuery {
    return this.create()
  }
}
