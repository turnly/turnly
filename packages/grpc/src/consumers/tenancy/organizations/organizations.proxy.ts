/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Organizations as Service } from './organizations.client'
import type {
  IGetOrganizationBySubdomainRequest,
  IGetOrganizationRequest,
  IGetOrganizationResponse,
} from './organizations.types'

export class Organizations extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getOrganizationBreaker: CircuitBreaker<
    IGetOrganizationRequest[],
    IGetOrganizationResponse
  >

  private getBySubdomainBreaker: CircuitBreaker<
    IGetOrganizationBySubdomainRequest[],
    IGetOrganizationResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get Organization Breaker
     */
    this.getOrganizationBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Tenancy.Organizations.getOne' }
    )

    /**
     * Get Organization by subdomain Breaker
     */
    this.getBySubdomainBreaker = new CircuitBreaker(
      this.service.getBySubdomain.bind(this.service),
      { name: 'Tenancy.Organizations.getBySubdomain' }
    )
  }

  public async getOne(request: IGetOrganizationRequest) {
    return this.getOrganizationBreaker.execute(request)
  }

  public async getBySubdomain(request: IGetOrganizationBySubdomainRequest) {
    return this.getBySubdomainBreaker.execute(request)
  }
}
