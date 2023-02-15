/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'

export type ReturnToQueueParams = {
  id: Guid
  organizationId: Guid
}

export class ReturnToQueueCommand implements ICommand {
  public constructor(public readonly params: ReturnToQueueParams) {}
}
