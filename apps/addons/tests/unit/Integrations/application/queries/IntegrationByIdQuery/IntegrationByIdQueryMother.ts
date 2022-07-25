/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
