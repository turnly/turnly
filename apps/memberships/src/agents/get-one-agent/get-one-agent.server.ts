/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { AgentsMapper } from 'agents/shared/infrastructure/agents-to-grpc.mapper'

import { GetOneAgentController } from './get-one-agent.controller'

export class GetOneAgentServer {
  public constructor(
    private readonly getOneAgentController: GetOneAgentController
  ) {}

  @Producers.CallHandler(Producers.Memberships.GetAgentResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Memberships.GetAgentRequest,
      Producers.Memberships.GetAgentResponse
    >,
    callback: Producers.ICallback<Producers.Memberships.GetAgentResponse>
  ) {
    const { data, meta } = await this.getOneAgentController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.Memberships.GetAgentResponse()
    const agent = AgentsMapper.toRPC(data)

    response.setData(agent)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
