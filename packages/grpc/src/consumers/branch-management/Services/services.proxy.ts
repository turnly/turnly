/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Services as Service } from './services.client'
import type {
  IGetServiceRequest,
  IGetServiceResponse,
  IListServicesOfOneLocationRequest,
  IListServicesOfOneLocationResponse,
} from './services.type'

export class Services extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getServiceBreaker: CircuitBreaker<
    IGetServiceRequest[],
    IGetServiceResponse
  >

  private listServicesOfOneLocationBreaker: CircuitBreaker<
    IListServicesOfOneLocationRequest[],
    IListServicesOfOneLocationResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get Service Breaker
     */
    this.getServiceBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'BranchManagement.Services.getOne' }
    )

    /**
     * Get Service by Location id Breaker
     */
    this.listServicesOfOneLocationBreaker = new CircuitBreaker(
      this.service.listServicesOfOneLocation.bind(this.service),
      { name: 'BranchManagement.Services.listServicesOfOneLocation' }
    )
  }

  public async getOne(request: IGetServiceRequest) {
    return this.getServiceBreaker.execute(request)
  }

  public async listServicesOfOneLocation(
    request: IListServicesOfOneLocationRequest
  ) {
    return this.listServicesOfOneLocationBreaker.execute(request)
  }
}
