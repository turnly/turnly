/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { IntegrationByIdQuery } from '../../../../../../src/Integrations/application/queries/IntegrationByIdQuery'

export class IntegrationByIdQueryMother {
  static create(id: Guid = ObjectMother.uuid('int')): IntegrationByIdQuery {
    return new IntegrationByIdQuery(id)
  }

  static random(): IntegrationByIdQuery {
    return this.create()
  }
}
