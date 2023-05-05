/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationCommand } from '@turnly/core'
import { ClearTicketsAfter, Order } from 'signage-displays/shared/domain/enums'

export class UpdateSignageDisplayCommand extends OrganizationCommand {
  public readonly id: Guid
  public readonly name: string
  public readonly refreshTime: number
  public readonly clearTicketsAfter: ClearTicketsAfter
  public readonly serviceIds: Guid[]
  public readonly order: Order
}
