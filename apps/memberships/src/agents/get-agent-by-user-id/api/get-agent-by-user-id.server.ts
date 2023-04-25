/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { AgentsMapper } from 'agents/shared/infrastructure/grpc/agents-mapper.grpc'

import { GetAgentByUserIdController } from './get-agent-by-user-id.controller'

export class GetAgentByUserIdServer {
  public constructor(
    private readonly getAgentByUserIdController: GetAgentByUserIdController
  ) {}

  @Producers.CallHandler(Producers.Teams.GetAgentByUserIdResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Teams.GetAgentByUserIdRequest,
      Producers.Teams.GetAgentByUserIdResponse
    >,
    callback: Producers.ICallback<Producers.Teams.GetAgentByUserIdResponse>
  ) {
    const { data, meta } = await this.getAgentByUserIdController.execute({
      userId: call.request.getUserId(),
    })

    const response = new Producers.Teams.GetAgentByUserIdResponse()
    const agent = AgentsMapper.toRPC(data)

    response.setData(agent)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
