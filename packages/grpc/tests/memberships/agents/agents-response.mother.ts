/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  Agent,
  GetAgentResponse,
  Meta,
} from '../../../src/producers/memberships'

export class AgentsResponseMother {
  static randomForGetOne(): GetAgentResponse {
    const agent = new Agent()
      .setId(ObjectMother.uuid('agt'))
      .setName(ObjectMother.names())
      .setLastname(ObjectMother.lastname())
      .setNick(ObjectMother.word())
      .setPosition(ObjectMother.position())
      .setLocationId(ObjectMother.uuid('loc'))
      .setDeskId(ObjectMother.uuid('desk'))
      .setServingFromIdsList(ObjectMother.repeater(ObjectMother.word, 3))

    return new GetAgentResponse().setData(agent)
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetAgentResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetAgentResponse().setMeta(meta)
  }
}
