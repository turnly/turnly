/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Devices as Service } from './devices.client'
import type {
  IGeneratePairingCodeDeviceRequest,
  IGeneratePairingCodeDeviceResponse,
  IGetOneDeviceRequest,
  IGetOneDeviceResponse,
  IListDevicesRequest,
  IListDevicesResponse,
  IPairToLocationDeviceRequest,
  IPairToLocationDeviceResponse,
  IUnpairDeviceRequest,
  IUnpairDeviceResponse,
} from './devices.type'

export class Devices extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private generatePairingCodeBreaker: CircuitBreaker<
    IGeneratePairingCodeDeviceRequest[],
    IGeneratePairingCodeDeviceResponse
  >

  private pairToLocationBreaker: CircuitBreaker<
    IPairToLocationDeviceRequest[],
    IPairToLocationDeviceResponse
  >

  private unpairBreaker: CircuitBreaker<
    IUnpairDeviceRequest[],
    IUnpairDeviceResponse
  >

  private getOneBreaker: CircuitBreaker<
    IGetOneDeviceRequest[],
    IGetOneDeviceResponse
  >

  private listBreaker: CircuitBreaker<
    IListDevicesRequest[],
    IListDevicesResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get Device Breaker
     */
    this.generatePairingCodeBreaker = new CircuitBreaker(
      this.service.generatePairingCode.bind(this.service),
      { name: 'Channels.Devices.generatePairingCode' }
    )

    this.pairToLocationBreaker = new CircuitBreaker(
      this.service.pairToLocation.bind(this.service),
      { name: 'Channels.Devices.pairToLocation' }
    )

    this.unpairBreaker = new CircuitBreaker(
      this.service.unpair.bind(this.service),
      { name: 'Channels.Devices.unpair' }
    )

    this.getOneBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Channels.Devices.getOne' }
    )

    this.listBreaker = new CircuitBreaker(
      this.service.list.bind(this.service),
      { name: 'Channels.Devices.list' }
    )
  }

  public async generatePairingCode(request: IGeneratePairingCodeDeviceRequest) {
    return this.generatePairingCodeBreaker.execute(request)
  }

  public async pairToLocation(request: IPairToLocationDeviceRequest) {
    return this.pairToLocationBreaker.execute(request)
  }

  public async unpair(request: IUnpairDeviceRequest) {
    return this.unpairBreaker.execute(request)
  }

  public async getOne(request: IGetOneDeviceRequest) {
    return this.getOneBreaker.execute(request)
  }

  public async list(request: IListDevicesRequest) {
    return this.listBreaker.execute(request)
  }
}
