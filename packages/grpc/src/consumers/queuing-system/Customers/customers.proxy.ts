/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Customers as Service } from './customers.client'
import type {
  ICreateCustomerRequest,
  ICreateCustomerResponse,
  IGetCustomerRequest,
  IGetCustomerResponse,
} from './customers.type'

export class Customers extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private createBreaker: CircuitBreaker<
    ICreateCustomerRequest[],
    ICreateCustomerResponse
  >
  private getBreaker: CircuitBreaker<
    IGetCustomerRequest[],
    IGetCustomerResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Create Customer Breaker
     */
    this.createBreaker = new CircuitBreaker(
      this.service.create.bind(this.service),
      { name: 'QueuingSystem.Customers.create' }
    )

    /**
     * Get Customer Breaker
     */
    this.getBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'QueuingSystem.Customers.getOne' }
    )
  }

  public async create(request: ICreateCustomerRequest) {
    return this.createBreaker.execute(request)
  }

  public async getOne(request: IGetCustomerRequest) {
    return this.getBreaker.execute(request)
  }
}
