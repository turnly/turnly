/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/core'

import { Agent } from '../../../../src/agents/shared/domain/entity/agent.entity'

export class AgentsQueryMother {
  static getOneWith(agent: Agent) {
    const { id, locationId, organizationId } = agent.toObject()

    return new QueryBuilder<Agent>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .equal('locationId', locationId)
      .getOne()
  }

  static getManyIn(agents: Agent[]) {
    const ids = agents.map(agent => agent.toObject().id)

    return new QueryBuilder<Agent>().in('id', ids).getMany(0, ids.length)
  }
}
