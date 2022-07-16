/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { AgentByIdQuery } from '../../../../../../src/Agents/application/queries/AgentByIdQuery'

export class AgentByIdQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('agent'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): AgentByIdQuery {
    return new AgentByIdQuery(id, organizationId)
  }

  static random(): AgentByIdQuery {
    return this.create()
  }
}
