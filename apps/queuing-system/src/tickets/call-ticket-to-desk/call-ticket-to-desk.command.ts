/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/core'

export type CallTicketToDeskParams = {
  id: Guid
  agentId: Guid
  organizationId: Guid
}

export class CallTicketToDeskCommand implements ICommand {
  public constructor(public readonly params: CallTicketToDeskParams) {}
}
