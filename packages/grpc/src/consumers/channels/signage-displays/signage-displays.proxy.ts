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
  IGeneratePairingCodeSignageDisplayRequest,
  IGeneratePairingCodeSignageDisplayResponse,
  IGetOneSignageDisplayRequest,
  IGetOneSignageDisplayResponse,
  IListSignageDisplaysRequest,
  IListSignageDisplaysResponse,
  IPairToLocationSignageDisplayRequest,
  IPairToLocationSignageDisplayResponse,
  IUnpairSignageDisplayRequest,
  IUnpairSignageDisplayResponse,
  IUpdateSignageDisplayRequest,
  IUpdateSignageDisplayResponse,
} from './signage-displays.type'

export class SignageDisplays extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private generatePairingCodeBreaker: CircuitBreaker<
    IGeneratePairingCodeSignageDisplayRequest[],
    IGeneratePairingCodeSignageDisplayResponse
  >

  private pairToLocationBreaker: CircuitBreaker<
    IPairToLocationSignageDisplayRequest[],
    IPairToLocationSignageDisplayResponse
  >

  private unpairBreaker: CircuitBreaker<
    IUnpairSignageDisplayRequest[],
    IUnpairSignageDisplayResponse
  >

  private getOneBreaker: CircuitBreaker<
    IGetOneSignageDisplayRequest[],
    IGetOneSignageDisplayResponse
  >

  private listBreaker: CircuitBreaker<
    IListSignageDisplaysRequest[],
    IListSignageDisplaysResponse
  >

  private updateBreaker: CircuitBreaker<
    IUpdateSignageDisplayRequest[],
    IUpdateSignageDisplayResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get SignageDisplay Breaker
     */
    this.generatePairingCodeBreaker = new CircuitBreaker(
      this.service.generatePairingCode.bind(this.service),
      { name: 'Channels.SignageDisplays.generatePairingCode' }
    )

    this.pairToLocationBreaker = new CircuitBreaker(
      this.service.pairToLocation.bind(this.service),
      { name: 'Channels.SignageDisplays.pairToLocation' }
    )

    this.unpairBreaker = new CircuitBreaker(
      this.service.unpair.bind(this.service),
      { name: 'Channels.SignageDisplays.unpair' }
    )

    this.getOneBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Channels.SignageDisplays.getOne' }
    )

    this.listBreaker = new CircuitBreaker(
      this.service.list.bind(this.service),
      { name: 'Channels.SignageDisplays.list' }
    )

    this.updateBreaker = new CircuitBreaker(
      this.service.update.bind(this.service),
      { name: 'Channels.SignageDisplays.update' }
    )
  }

  public async generatePairingCode(
    request: IGeneratePairingCodeSignageDisplayRequest
  ) {
    return this.generatePairingCodeBreaker.execute(request)
  }

  public async pairToLocation(request: IPairToLocationSignageDisplayRequest) {
    return this.pairToLocationBreaker.execute(request)
  }

  public async unpair(request: IUnpairSignageDisplayRequest) {
    return this.unpairBreaker.execute(request)
  }

  public async getOne(request: IGetOneSignageDisplayRequest) {
    return this.getOneBreaker.execute(request)
  }

  public async list(request: IListSignageDisplaysRequest) {
    return this.listBreaker.execute(request)
  }

  public async update(request: IUpdateSignageDisplayRequest) {
    return this.updateBreaker.execute(request)
  }
}
