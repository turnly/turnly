/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Scopes } from '@turnly/auth'
import { Consumers, Producers } from '@turnly/grpc'
import { TokensMapper } from 'tokens/shared/infrastructure/tokens-to-grpc.mapper'

import { CreateTokenController } from './create-token.controller'

export class CreateTokenServer {
  public constructor(
    private readonly createTokenController: CreateTokenController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.CreateTokenResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.CreateTokenRequest,
      Producers.Tenancy.CreateTokenResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.CreateTokenResponse>
  ) {
    const { data, meta } = await this.createTokenController.execute({
      name: call.request.getName(),
      scopes: call.request.getScopesList() as Scopes[],
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.Tenancy.CreateTokenResponse()

    const token = TokensMapper.toRPC(data)

    response.setData(token)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
