/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Tokens as Service } from './tokens.client'
import type {
  ICreateTokenRequest,
  ICreateTokenResponse,
  IExchangeTokenRequest,
  IExchangeTokenResponse,
  IGetTokenRequest,
  IGetTokenResponse,
} from './tokens.types'

export class Tokens extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getTokenBreaker: CircuitBreaker<IGetTokenRequest[], IGetTokenResponse>

  private createTokenBreaker: CircuitBreaker<
    ICreateTokenRequest[],
    ICreateTokenResponse
  >

  private exchangeTokenBreaker: CircuitBreaker<
    IExchangeTokenRequest[],
    IExchangeTokenResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    this.getTokenBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Tenancy.Tokens.getOne' }
    )

    this.createTokenBreaker = new CircuitBreaker(
      this.service.create.bind(this.service),
      { name: 'Tenancy.Tokens.create' }
    )

    this.exchangeTokenBreaker = new CircuitBreaker(
      this.service.exchange.bind(this.service),
      { name: 'Tenancy.Tokens.exchange' }
    )
  }

  public async getOne(request: IGetTokenRequest) {
    return this.getTokenBreaker.execute(request)
  }

  public async create(request: ICreateTokenRequest) {
    return this.createTokenBreaker.execute(request)
  }

  public async exchange(request: IExchangeTokenRequest) {
    return this.exchangeTokenBreaker.execute(request)
  }
}
