/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Widgets as Service } from './widgets.client'
import type { IGetWidgetRequest, IGetWidgetResponse } from './widgets.type'

export class Widgets extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getBreaker: CircuitBreaker<IGetWidgetRequest[], IGetWidgetResponse>

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get Widget Breaker
     */
    this.getBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Channels.Widgets.getOne' }
    )
  }

  public async getOne(request: IGetWidgetRequest) {
    return this.getBreaker.execute(request)
  }
}
