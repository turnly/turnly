/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { TokensMapper } from 'tokens/shared/infrastructure/tokens-to-grpc.mapper'

import { GetOneTokenController } from './get-one-token.controller'

export class GetOneTokenServer {
  public constructor(
    private readonly getOneTokenController: GetOneTokenController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.GetTokenResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.GetTokenRequest,
      Producers.BusinessManagement.GetTokenResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.GetTokenResponse>
  ) {
    const { data, meta } = await this.getOneTokenController.execute({
      secret: call.request.getSecret(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BusinessManagement.GetTokenResponse()
    const token = TokensMapper.toRPC(data)

    response.setData(token)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}