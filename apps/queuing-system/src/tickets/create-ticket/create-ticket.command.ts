/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { OrganizationCommand } from '@turnly/core'
import { TicketSource } from 'tickets/shared/domain/enums/ticket-source.enum'

export class CreateTicketCommand extends OrganizationCommand {
  public readonly source: TicketSource
  public readonly serviceId: Guid
  public readonly locationId: Guid
  public readonly customerId: Guid
  public readonly extra: Nullable<Extra[]>
  public readonly serviceName: string
}
