/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class ServiceByIdQuery implements IQuery {
  public constructor(
    public readonly id: Guid,
    public readonly organizationId: Guid
  ) {}
}
