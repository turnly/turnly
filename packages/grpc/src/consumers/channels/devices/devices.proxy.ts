/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Devices as Service } from './devices.client'
import type {
  IGeneratePairingCodeDeviceRequest,
  IGetOneDeviceRequest,
  IListDevicesRequest,
  IPairToLocationDeviceRequest,
  IUnpairDeviceRequest,
} from './devices.type'

export class Devices extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async generatePairingCode(request: IGeneratePairingCodeDeviceRequest) {
    return this.service.generatePairingCode(request)
  }

  public async pairToLocation(request: IPairToLocationDeviceRequest) {
    return this.service.pairToLocation(request)
  }

  public async unpair(request: IUnpairDeviceRequest) {
    return this.service.unpair(request)
  }

  public async getOne(request: IGetOneDeviceRequest) {
    return this.service.getOne(request)
  }

  public async list(request: IListDevicesRequest) {
    return this.service.list(request)
  }
}
