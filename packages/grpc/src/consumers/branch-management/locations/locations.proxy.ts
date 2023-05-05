/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Locations as Service } from './locations.client'
import type {
  IGetLocationReadyForServingRequest,
  IGetLocationReadyForServingResponse,
  IGetLocationRequest,
  IGetLocationResponse,
  ISearchAvailableLocationsForServingRequest,
  ISearchAvailableLocationsForServingResponse,
} from './locations.type'

export class Locations extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private searchAvailableLocationsForServingBreaker: CircuitBreaker<
    ISearchAvailableLocationsForServingRequest[],
    ISearchAvailableLocationsForServingResponse
  >
  private getLocationBreaker: CircuitBreaker<
    IGetLocationRequest[],
    IGetLocationResponse
  >

  private getReadyForServingBreaker: CircuitBreaker<
    IGetLocationReadyForServingRequest[],
    IGetLocationReadyForServingResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Find Locations Breaker
     */
    this.searchAvailableLocationsForServingBreaker = new CircuitBreaker(
      this.service.searchAvailableLocationsForServing.bind(this.service),
      { name: 'BranchManagement.Locations.searchAvailableLocationsForServing' }
    )

    /**
     * Get Location Breaker
     */
    this.getLocationBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'BranchManagement.Locations.getOne' }
    )

    /**
     * Get Location Ready For Serving Breaker
     */
    this.getReadyForServingBreaker = new CircuitBreaker(
      this.service.getReadyForServing.bind(this.service),
      { name: 'BranchManagement.Locations.getReadyForServing' }
    )
  }

  public async searchAvailableLocationsForServing(
    request: ISearchAvailableLocationsForServingRequest
  ) {
    return this.searchAvailableLocationsForServingBreaker.execute(request)
  }

  public async getOne(request: IGetLocationRequest) {
    return this.getLocationBreaker.execute(request)
  }

  public async getReadyForServing(request: IGetLocationReadyForServingRequest) {
    return this.getReadyForServingBreaker.execute(request)
  }
}
