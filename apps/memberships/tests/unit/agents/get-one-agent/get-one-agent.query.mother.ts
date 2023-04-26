/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneAgentQuery } from '../../../../src/agents/get-one-agent'

export class GetOneAgentQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('agent'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetOneAgentQuery {
    return new GetOneAgentQuery(id, organizationId)
  }

  static random(): GetOneAgentQuery {
    return this.create()
  }
}
