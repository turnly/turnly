/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  AgentsClient,
  GetAgentByUserIdRequest,
  GetAgentRequest,
} from '../../../producers/memberships'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IAgentsClient,
  IGetAgentByUserIdRequest,
  IGetAgentByUserIdResponse,
  IGetAgentRequest,
  IGetAgentResponse,
} from './agents.types'

export class Agents extends Client<AgentsClient> implements IAgentsClient {
  public constructor(config?: ClientConfig) {
    super(AgentsClient, {
      internalAddress: 'memberships.turnly.local',
      ...config,
    })
  }

  public async getOne(request: IGetAgentRequest): Promise<IGetAgentResponse> {
    const req = new GetAgentRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getByUserId(
    request: IGetAgentByUserIdRequest
  ): Promise<IGetAgentByUserIdResponse> {
    const req = new GetAgentByUserIdRequest().setUserId(request.userId)

    return (
      await promisify(this.client.getByUserId.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
