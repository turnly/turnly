/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { DigitalSignage as Service } from './digital-signage.client'
import type {
  IGetPairingCodeDigitalSignageRequest,
  IGetPairingCodeDigitalSignageResponse,
  IPairToLocationDigitalSignageRequest,
  IPairToLocationDigitalSignageResponse,
} from './digital-signage.type'

export class DigitalSignage extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getPairingCodeBreaker: CircuitBreaker<
    IGetPairingCodeDigitalSignageRequest[],
    IGetPairingCodeDigitalSignageResponse
  >

  private pairToLocationBreaker: CircuitBreaker<
    IPairToLocationDigitalSignageRequest[],
    IPairToLocationDigitalSignageResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get DigitalSignage Breaker
     */
    this.getPairingCodeBreaker = new CircuitBreaker(
      this.service.getPairingCode.bind(this.service),
      { name: 'Channels.DigitalSignage.getPairingCode' }
    )

    this.pairToLocationBreaker = new CircuitBreaker(
      this.service.pairToLocation.bind(this.service),
      { name: 'Channels.DigitalSignage.pairToLocation' }
    )
  }

  public async getPairingCode(request: IGetPairingCodeDigitalSignageRequest) {
    return this.getPairingCodeBreaker.execute(request)
  }

  public async pairToLocation(request: IPairToLocationDigitalSignageRequest) {
    return this.pairToLocationBreaker.execute(request)
  }
}
