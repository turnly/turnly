/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Scopes } from '@turnly/auth'
import { Consumers, Producers } from '@turnly/grpc'
import { AccessTokensMapper } from 'access-tokens/shared/infrastructure/access-tokens-to-grpc.mapper'

import { CreateAccessTokenController } from './create-access-token.controller'

export class CreateAccessTokenServer {
  public constructor(
    private readonly createAccessTokenController: CreateAccessTokenController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.CreateAccessTokenResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.CreateAccessTokenRequest,
      Producers.BusinessManagement.CreateAccessTokenResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.CreateAccessTokenResponse>
  ) {
    const { data, meta } = await this.createAccessTokenController.execute({
      name: call.request.getName(),
      scopes: call.request.getScopesList() as Scopes[],
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response =
      new Producers.BusinessManagement.CreateAccessTokenResponse()

    const token = AccessTokensMapper.toRPC(data)

    response.setData(token)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
