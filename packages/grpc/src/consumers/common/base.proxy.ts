/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { Client as gRPCClient, ServerUnaryCall } from '@grpc/grpc-js'
import { Guid } from '@turnly/common'

import { Client } from './base.client'
import { ClientConfig } from './client-options.type'

type Constructor<T> = {
  new (config?: ClientConfig): T
}

export abstract class Proxy<S extends Client<gRPCClient>> {
  protected readonly service: S

  public constructor(Service: Constructor<S>, config?: ClientConfig) {
    this.service = new Service(config)
  }

  public destroyOrganizationId() {
    this.service.destroyOrganizationId()

    return this
  }

  public setOrganizationId(organizationId: Guid) {
    this.service.setOrganizationId(organizationId)

    return this
  }

  public getOrganizationId(): Guid {
    return this.service.getOrganizationId()
  }

  public static getOrganizationId(
    call: ServerUnaryCall<unknown, unknown>
  ): Guid {
    return Client.getOrganizationId(call)
  }

  protected abstract setupBreakers(): void
}
