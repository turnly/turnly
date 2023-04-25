/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Agents as Service } from './agents.client'
import type {
  IGetAgentByUserIdRequest,
  IGetAgentByUserIdResponse,
  IGetAgentRequest,
  IGetAgentResponse,
} from './agents.types'

export class Agents extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getAgentBreaker: CircuitBreaker<IGetAgentRequest[], IGetAgentResponse>

  private getByUserIdBreaker: CircuitBreaker<
    IGetAgentByUserIdRequest[],
    IGetAgentByUserIdResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get Agent Breaker
     */
    this.getAgentBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Memberships.Agents.getOne' }
    )

    /**
     * Get Agent by User Id Breaker
     */
    this.getByUserIdBreaker = new CircuitBreaker(
      this.service.getByUserId.bind(this.service),
      { name: 'Memberships.Agents.getByUserId' }
    )
  }

  public async getOne(request: IGetAgentRequest) {
    return this.getAgentBreaker.execute(request)
  }

  public async getByUserId(request: IGetAgentByUserIdRequest) {
    return this.getByUserIdBreaker.execute(request)
  }
}
