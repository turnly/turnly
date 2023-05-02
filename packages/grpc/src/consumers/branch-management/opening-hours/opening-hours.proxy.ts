/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { OpeningHours as Service } from './opening-hours.client'
import type {
  ICreateRequest,
  ICreateResponse,
  IListLocationHoursRequest,
  IListLocationHoursResponse,
} from './opening-hours.type'

export class OpeningHours extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private listLocationsHoursBreaker: CircuitBreaker<
    IListLocationHoursRequest[],
    IListLocationHoursResponse
  >
  private createBreaker: CircuitBreaker<ICreateRequest[], ICreateResponse>

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * List Locations Hours Breaker
     */
    this.listLocationsHoursBreaker = new CircuitBreaker(
      this.service.listLocationsHours.bind(this.service),
      {
        name: 'BranchManagement.OpeningHours.listLocationsHours',
      }
    )

    /**
     * Create Opening Hours Breaker
     */
    this.createBreaker = new CircuitBreaker(
      this.service.create.bind(this.service),
      { name: 'BranchManagement.OpeningHours.create' }
    )
  }

  public async listLocationsHours(request: IListLocationHoursRequest) {
    return this.listLocationsHoursBreaker.execute(request)
  }

  public async create(request: ICreateRequest) {
    return this.createBreaker.execute(request)
  }
}
