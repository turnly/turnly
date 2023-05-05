/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Features as Service } from './features.client'
import type {
  IBulkFeaturesRequest,
  IBulkFeaturesResponse,
  IDeleteFeatureRequest,
  IDeleteFeatureResponse,
  IListFeaturesRequest,
  IListFeaturesResponse,
} from './features.types'

export class Features extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private bulkFeaturesBreaker: CircuitBreaker<
    IBulkFeaturesRequest[],
    IBulkFeaturesResponse
  >

  private deleteFeatureBreaker: CircuitBreaker<
    IDeleteFeatureRequest[],
    IDeleteFeatureResponse
  >

  private listFeaturesBreaker: CircuitBreaker<
    IListFeaturesRequest[],
    IListFeaturesResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    this.bulkFeaturesBreaker = new CircuitBreaker(
      this.service.bulk.bind(this.service),
      { name: 'Tenancy.Features.bulk' }
    )

    this.deleteFeatureBreaker = new CircuitBreaker(
      this.service.delete.bind(this.service),
      { name: 'Tenancy.Features.delete' }
    )

    this.listFeaturesBreaker = new CircuitBreaker(
      this.service.list.bind(this.service),
      { name: 'Tenancy.Features.list' }
    )
  }

  public async bulk(request: IBulkFeaturesRequest) {
    return this.bulkFeaturesBreaker.execute(request)
  }

  public async delete(request: IDeleteFeatureRequest) {
    return this.deleteFeatureBreaker.execute(request)
  }

  public async list(request: IListFeaturesRequest) {
    return this.listFeaturesBreaker.execute(request)
  }
}
