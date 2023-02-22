/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Answers as Service } from './answers.client'
import type {
  ICreateAnswersRequest,
  ICreateAnswersResponse,
  IListAnswersByFieldRequest,
  IListAnswersByFieldResponse,
} from './answers.type'

export class Answers extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private createBreaker: CircuitBreaker<
    ICreateAnswersRequest[],
    ICreateAnswersResponse
  >
  private listByFieldBreaker: CircuitBreaker<
    IListAnswersByFieldRequest[],
    IListAnswersByFieldResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Breaker for create answers
     */
    this.createBreaker = new CircuitBreaker(
      this.service.create.bind(this.service),
      { name: 'BusinessDataFields.Answers.create' }
    )

    /**
     * Breaker for list by Field
     */
    this.listByFieldBreaker = new CircuitBreaker(
      this.service.listByField.bind(this.service),
      { name: 'BusinessDataFields.Answers.listByField' }
    )
  }

  public async create(request: ICreateAnswersRequest) {
    return this.createBreaker.execute(request)
  }

  public async listByField(request: IListAnswersByFieldRequest) {
    return this.listByFieldBreaker.execute(request)
  }
}
