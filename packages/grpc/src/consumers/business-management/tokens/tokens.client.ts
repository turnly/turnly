/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateTokenRequest,
  GetTokenRequest,
  TokensClient,
} from '../../../producers/business-management'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  ICreateTokenRequest,
  ICreateTokenResponse,
  IExchangeTokenRequest,
  IExchangeTokenResponse,
  IGetTokenRequest,
  IGetTokenResponse,
  ITokensClient,
} from './tokens.types'

export class Tokens extends Client<TokensClient> implements ITokensClient {
  public constructor(config?: ClientConfig) {
    super(TokensClient, {
      internalAddress: 'business-management.turnly.local',
      ...config,
    })
  }

  public async getOne(request: IGetTokenRequest): Promise<IGetTokenResponse> {
    const req = new GetTokenRequest().setSecret(request.secret)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async create(
    request: ICreateTokenRequest
  ): Promise<ICreateTokenResponse> {
    const req = new CreateTokenRequest()
      .setName(request.name)
      .setScopesList(request.scopesList)

    return (
      await promisify(this.client.create.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async exchange(
    request: IExchangeTokenRequest
  ): Promise<IExchangeTokenResponse> {
    const req = new CreateTokenRequest().setScopesList(request.scopesList)

    return (
      await promisify(this.client.exchange.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
