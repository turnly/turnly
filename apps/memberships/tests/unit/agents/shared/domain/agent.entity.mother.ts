/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneAgentQuery } from '../../../../../src/agents/shared/application/queries'
import { Agent } from '../../../../../src/agents/shared/domain/entity/agent.entity'

export class AgentMother {
  static create(
    name: string = ObjectMother.names(),
    lastname: string = ObjectMother.names(),
    locationId: Guid = ObjectMother.uuid('loc'),
    userId: Guid = ObjectMother.uuid('agt'),
    nick: string = ObjectMother.names(),
    position: string = ObjectMother.position(),
    deskId: Guid = ObjectMother.uuid('desk'),
    servingFromIds: Guid[] = [ObjectMother.uuid('loc')],
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Agent {
    return Agent.create({
      name,
      lastname,
      locationId,
      userId,
      nick,
      position,
      deskId,
      servingFromIds,
      organizationId,
      extra,
    })
  }

  static random(): Agent {
    return AgentMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Agent[] {
    return ObjectMother.repeater(AgentMother.random, max)
  }

  static fromExistingAgentOnQuery(
    query: GetOneAgentQuery | { organizationId: Guid; id: Guid }
  ): Agent {
    return Agent.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Agent {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
