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
  IGetOrganizationBySubdomainResponse,
  IListMyOrganizationsRequest,
  IListMyOrganizationsResponse,
} from './organizations.types'

export class Organizations extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private listMyOrganizationsBreaker: CircuitBreaker<
    IListMyOrganizationsRequest[],
    IListMyOrganizationsResponse
  >

  private getBySubdomainBreaker: CircuitBreaker<
    IGetOrganizationBySubdomainRequest[],
    IGetOrganizationBySubdomainResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * List my organizations Breaker
     */
    this.listMyOrganizationsBreaker = new CircuitBreaker(
      this.service.listMyOrganizations.bind(this.service),
      { name: 'Tenancy.Organizations.listMyOrganizations' }
    )

    /**
     * Get Organization by subdomain Breaker
     */
    this.getBySubdomainBreaker = new CircuitBreaker(
      this.service.getBySubdomain.bind(this.service),
      { name: 'Tenancy.Organizations.getBySubdomain' }
    )
  }

  public async listMyOrganizations(request: IListMyOrganizationsRequest) {
    return this.listMyOrganizationsBreaker.execute(request)
  }

  public async getBySubdomain(request: IGetOrganizationBySubdomainRequest) {
    return this.getBySubdomainBreaker.execute(request)
  }
}
