/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

export class AgentsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Agent>> | undefined
  ): Producers.Memberships.Agent {
    const agent = new Producers.Memberships.Agent()

    if (entity) {
      agent.setId(entity.id)
      agent.setName(entity.name)
      agent.setLastname(entity.lastname)
      agent.setLocationId(entity.locationId)
      agent.setOrganizationId(entity.organizationId)

      if (entity.userId) agent.setUserId(entity.userId)

      if (entity.nick) agent.setNick(entity.nick)

      if (entity.position) agent.setPosition(entity.position)

      if (entity.servingFromIds)
        agent.setServingFromIdsList(entity.servingFromIds)
    }

    return agent
  }
}
