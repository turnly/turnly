/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Answers as Service } from './answers.client'
import type {
  ICreateAnswersRequest,
  IListAnswersByFieldRequest,
} from './answers.type'

export class Answers extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async create(request: ICreateAnswersRequest) {
    return this.service.create(request)
  }

  public async listByField(request: IListAnswersByFieldRequest) {
    return this.service.listByField(request)
  }
}
