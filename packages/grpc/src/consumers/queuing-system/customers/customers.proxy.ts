/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Customers as Service } from './customers.client'
import type {
  ICreateCustomerRequest,
  IGetCustomerRequest,
} from './customers.type'

export class Customers extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async create(request: ICreateCustomerRequest) {
    return this.service.create(request)
  }

  public async getOne(request: IGetCustomerRequest) {
    return this.service.getOne(request)
  }
}
