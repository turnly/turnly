/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { AgentByIdQuery } from '../../../../src/Agents/application/queries/AgentByIdQuery'
import { Agent } from '../../../../src/Agents/domain/entities/Agent'

export class AgentMother {
  static create(
    name: string = ObjectMother.names(),
    lastname: string = ObjectMother.names(),
    locationId: Guid = ObjectMother.uuid('loc'),
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

  static fromExistingAgentOnQuery(
    query: AgentByIdQuery | { organizationId: Guid; id: Guid }
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
      extra
    )
  }
}
