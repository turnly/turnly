/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { OpeningHours as Service } from './opening-hours.client'
import type {
  IListLocationHoursRequest,
  ISaveOpeningHoursRequest,
} from './opening-hours.type'

export class OpeningHours extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async listLocationsHours(request: IListLocationHoursRequest) {
    return this.service.listLocationsHours(request)
  }

  public async save(request: ISaveOpeningHoursRequest) {
    return this.service.save(request)
  }
}
