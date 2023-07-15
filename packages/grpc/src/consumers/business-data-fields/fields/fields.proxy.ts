/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Fields as Service } from './fields.client'
import type { IFindCustomerFieldsByServiceRequest } from './fields.type'

export class Fields extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async findCustomerFieldsByService(
    request: IFindCustomerFieldsByServiceRequest
  ) {
    return this.service.findCustomerFieldsByService(request)
  }
}
