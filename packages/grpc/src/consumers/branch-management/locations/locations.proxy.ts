/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Locations as Service } from './locations.client'
import type {
  IGetLocationReadyForServingRequest,
  IGetLocationRequest,
  ISearchAvailableLocationsForServingRequest,
} from './locations.type'

export class Locations extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async searchAvailableLocationsForServing(
    request: ISearchAvailableLocationsForServingRequest
  ) {
    return this.service.searchAvailableLocationsForServing(request)
  }

  public async getOne(request: IGetLocationRequest) {
    return this.service.getOne(request)
  }

  public async getReadyForServing(request: IGetLocationReadyForServingRequest) {
    return this.service.getReadyForServing(request)
  }
}
