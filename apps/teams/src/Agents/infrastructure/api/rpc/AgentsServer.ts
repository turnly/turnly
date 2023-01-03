/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'

import { AgentsController } from '../controllers/AgentsController'
import { AgentsMapper } from './AgentsMapper'

export class AgentsServer extends Producers.ServerImplementation<Producers.Teams.IAgentsServer> {
  public constructor(private readonly agentsController: AgentsController) {
    super()
  }

  @Producers.CallHandler(Producers.Teams.GetAgentResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.Teams.GetAgentRequest,
      Producers.Teams.GetAgentResponse
    >,
    callback: Producers.ICallback<Producers.Teams.GetAgentResponse>
  ) {
    const { data, meta } = await this.agentsController.getOne({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.Teams.GetAgentResponse()
    const agent = AgentsMapper.toRPC(data)

    response.setData(agent)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.Teams.GetAgentByUserIdResponse)
  public async getByUserId(
    call: Producers.ServerUnaryCall<
      Producers.Teams.GetAgentByUserIdRequest,
      Producers.Teams.GetAgentByUserIdResponse
    >,
    callback: Producers.ICallback<Producers.Teams.GetAgentByUserIdResponse>
  ) {
    const { data, meta } = await this.agentsController.getByUserId({
      userId: call.request.getUserId(),
    })

    const response = new Producers.Teams.GetAgentByUserIdResponse()
    const agent = AgentsMapper.toRPC(data)

    response.setData(agent)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      getByUserId: this.getByUserId.bind(this),
    }
  }
}
