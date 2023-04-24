/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { IntegrationsMapper } from 'integrations/shared/infrastructure/grpc/integrations-mapper.grpc'

import { GetOneIntegrationController } from './get-one-integration.controller'

export class GetOneIntegrationServer {
  public constructor(
    private readonly getOneIntegrationController: GetOneIntegrationController
  ) {}

  @Producers.CallHandler(Producers.Addons.GetIntegrationResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Addons.GetIntegrationRequest,
      Producers.Addons.GetIntegrationResponse
    >,
    callback: Producers.ICallback<Producers.Addons.GetIntegrationResponse>
  ) {
    const { data, meta } = await this.getOneIntegrationController.execute({
      id: call.request.getId(),
    })

    const response = new Producers.Addons.GetIntegrationResponse()
    const integration = IntegrationsMapper.toRPC(data)

    response.setData(integration)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
