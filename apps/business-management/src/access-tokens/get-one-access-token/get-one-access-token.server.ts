/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { AccessTokensMapper } from 'access-tokens/shared/infrastructure/access-tokens-to-grpc.mapper'

import { GetOneAccessTokenController } from './get-one-access-token.controller'

export class GetOneAccessTokenServer {
  public constructor(
    private readonly getOneAccessTokenController: GetOneAccessTokenController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.GetAccessTokenResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.GetAccessTokenRequest,
      Producers.BusinessManagement.GetAccessTokenResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.GetAccessTokenResponse>
  ) {
    const { data, meta } = await this.getOneAccessTokenController.execute({
      token: call.request.getToken(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BusinessManagement.GetAccessTokenResponse()
    const accessToken = AccessTokensMapper.toRPC(data)

    response.setData(accessToken)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
