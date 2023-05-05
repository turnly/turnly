/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Members as Service } from './members.client'
import type {
  IGetMemberByUserIdRequest,
  IGetMemberByUserIdResponse,
  IGetMemberRequest,
  IGetMemberResponse,
} from './members.types'

export class Members extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private getMemberBreaker: CircuitBreaker<
    IGetMemberRequest[],
    IGetMemberResponse
  >

  private getByUserIdBreaker: CircuitBreaker<
    IGetMemberByUserIdRequest[],
    IGetMemberByUserIdResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Get Member Breaker
     */
    this.getMemberBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'Tenancy.Members.getOne' }
    )

    /**
     * Get Member by User Id Breaker
     */
    this.getByUserIdBreaker = new CircuitBreaker(
      this.service.getByUserId.bind(this.service),
      { name: 'Tenancy.Members.getByUserId' }
    )
  }

  public async getOne(request: IGetMemberRequest) {
    return this.getMemberBreaker.execute(request)
  }

  public async getByUserId(request: IGetMemberByUserIdRequest) {
    return this.getByUserIdBreaker.execute(request)
  }
}
