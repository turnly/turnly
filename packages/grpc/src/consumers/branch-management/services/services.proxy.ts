/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Services as Service } from './services.client'
import type {
  IGetServiceRequest,
  IListServicesOfOneLocationRequest,
} from './services.type'

export class Services extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async getOne(request: IGetServiceRequest) {
    return this.service.getOne(request)
  }

  public async listServicesOfOneLocation(
    request: IListServicesOfOneLocationRequest
  ) {
    return this.service.listServicesOfOneLocation(request)
  }
}
