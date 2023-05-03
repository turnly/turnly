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
  IBulkRequest,
  IBulkResponse,
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
  private bulkBreaker: CircuitBreaker<IBulkRequest[], IBulkResponse>

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
    this.bulkBreaker = new CircuitBreaker(
      this.service.bulk.bind(this.service),
      { name: 'BranchManagement.OpeningHours.bulk' }
    )
  }

  public async listLocationsHours(request: IListLocationHoursRequest) {
    return this.listLocationsHoursBreaker.execute(request)
  }

  public async bulk(request: IBulkRequest) {
    return this.bulkBreaker.execute(request)
  }
}
