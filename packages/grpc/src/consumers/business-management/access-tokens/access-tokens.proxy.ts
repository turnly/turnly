/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { AccessTokens as Service } from './access-tokens.client'
import type {
  ICreateAccessTokenRequest,
  ICreateAccessTokenResponse,
  IExchangeAccessTokenRequest,
  IExchangeAccessTokenResponse,
  IGetAccessTokenRequest,
  IGetAccessTokenResponse,
} from './access-tokens.types'

export class AccessTokens extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getAccessTokenBreaker: CircuitBreaker<
    IGetAccessTokenRequest[],
    IGetAccessTokenResponse
  >

  private createAccessTokenBreaker: CircuitBreaker<
    ICreateAccessTokenRequest[],
    ICreateAccessTokenResponse
  >

  private exchangeAccessTokenBreaker: CircuitBreaker<
    IExchangeAccessTokenRequest[],
    IExchangeAccessTokenResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    this.getAccessTokenBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'BusinessManagement.AccessTokens.getOne' }
    )

    this.createAccessTokenBreaker = new CircuitBreaker(
      this.service.create.bind(this.service),
      { name: 'BusinessManagement.AccessTokens.create' }
    )

    this.exchangeAccessTokenBreaker = new CircuitBreaker(
      this.service.exchange.bind(this.service),
      { name: 'BusinessManagement.AccessTokens.exchange' }
    )
  }

  public async getOne(request: IGetAccessTokenRequest) {
    return this.getAccessTokenBreaker.execute(request)
  }

  public async create(request: ICreateAccessTokenRequest) {
    return this.createAccessTokenBreaker.execute(request)
  }

  public async exchange(request: IExchangeAccessTokenRequest) {
    return this.exchangeAccessTokenBreaker.execute(request)
  }
}
