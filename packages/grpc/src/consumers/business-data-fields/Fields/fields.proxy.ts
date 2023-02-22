/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Fields as Service } from './fields.client'
import type {
  IFindCustomerFieldsByServiceRequest,
  IFindCustomerFieldsByServiceResponse,
} from './fields.type'

export class Fields extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private findCustomerFieldsByServiceBreaker: CircuitBreaker<
    IFindCustomerFieldsByServiceRequest[],
    IFindCustomerFieldsByServiceResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Find Fields by serviceId Breaker
     */
    this.findCustomerFieldsByServiceBreaker = new CircuitBreaker(
      this.service.findCustomerFieldsByService.bind(this.service)
    )
  }

  public async findCustomerFieldsByService(
    request: IFindCustomerFieldsByServiceRequest
  ) {
    return this.findCustomerFieldsByServiceBreaker.execute(request)
  }
}
