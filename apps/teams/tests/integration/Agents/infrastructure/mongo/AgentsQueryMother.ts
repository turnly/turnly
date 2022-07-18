/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Agent } from '../../../../../src/Agents/domain/entities/Agent'

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
