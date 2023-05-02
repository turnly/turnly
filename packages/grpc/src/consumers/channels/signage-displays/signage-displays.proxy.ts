/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { SignageDisplays as Service } from './signage-displays.client'
import type {
  IGetPairingCodeSignageDisplayRequest,
  IGetPairingCodeSignageDisplayResponse,
  IPairToLocationSignageDisplayRequest,
  IPairToLocationSignageDisplayResponse,
  IUnpairSignageDisplayRequest,
  IUnpairSignageDisplayResponse,
} from './signage-displays.type'

export class SignageDisplays extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getPairingCodeBreaker: CircuitBreaker<
    IGetPairingCodeSignageDisplayRequest[],
    IGetPairingCodeSignageDisplayResponse
  >

  private pairToLocationBreaker: CircuitBreaker<
    IPairToLocationSignageDisplayRequest[],
    IPairToLocationSignageDisplayResponse
  >

  private unpairBreaker: CircuitBreaker<
    IUnpairSignageDisplayRequest[],
    IUnpairSignageDisplayResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get SignageDisplay Breaker
     */
    this.getPairingCodeBreaker = new CircuitBreaker(
      this.service.getPairingCode.bind(this.service),
      { name: 'Channels.SignageDisplays.getPairingCode' }
    )

    this.pairToLocationBreaker = new CircuitBreaker(
      this.service.pairToLocation.bind(this.service),
      { name: 'Channels.SignageDisplays.pairToLocation' }
    )

    this.unpairBreaker = new CircuitBreaker(
      this.service.unpair.bind(this.service),
      { name: 'Channels.SignageDisplays.unpair' }
    )
  }

  public async getPairingCode(request: IGetPairingCodeSignageDisplayRequest) {
    return this.getPairingCodeBreaker.execute(request)
  }

  public async pairToLocation(request: IPairToLocationSignageDisplayRequest) {
    return this.pairToLocationBreaker.execute(request)
  }

  public async unpair(request: IUnpairSignageDisplayRequest) {
    return this.unpairBreaker.execute(request)
  }
}
