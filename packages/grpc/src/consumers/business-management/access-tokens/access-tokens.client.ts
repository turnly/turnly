/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  AccessTokensClient,
  CreateAccessTokenRequest,
  GetAccessTokenRequest,
} from '../../../producers/business-management'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IAccessTokensClient,
  ICreateAccessTokenRequest,
  ICreateAccessTokenResponse,
  IExchangeAccessTokenRequest,
  IExchangeAccessTokenResponse,
  IGetAccessTokenRequest,
  IGetAccessTokenResponse,
} from './access-tokens.types'

export class AccessTokens
  extends Client<AccessTokensClient>
  implements IAccessTokensClient
{
  public constructor(config?: ClientConfig) {
    super(AccessTokensClient, {
      internalAddress: 'business-management.turnly.local',
      ...config,
    })
  }

  public async getOne(
    request: IGetAccessTokenRequest
  ): Promise<IGetAccessTokenResponse> {
    const req = new GetAccessTokenRequest().setToken(request.token)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async create(
    request: ICreateAccessTokenRequest
  ): Promise<ICreateAccessTokenResponse> {
    const req = new CreateAccessTokenRequest()
      .setName(request.name)
      .setScopesList(request.scopesList)
      .setCreateByType(request.createByType)
      .setCreateById(request.createById)

    return (
      await promisify(this.client.create.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async exchange(
    request: IExchangeAccessTokenRequest
  ): Promise<IExchangeAccessTokenResponse> {
    const req = new CreateAccessTokenRequest().setScopesList(request.scopesList)

    return (
      await promisify(this.client.exchange.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
