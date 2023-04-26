/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationCommand } from '@turnly/core'

export class MarkTicketAsServedCommand extends OrganizationCommand {
  public readonly id: Guid
}