/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ICommand } from '@turnly/core'
import { CreateTicketParams } from 'tickets/shared/domain/entities/ticket.entity'

export type CreateTicketCommandParams = Omit<
  CreateTicketParams & { serviceName: string },
  'displayCode' | 'status' | 'priority' | 'rating' | 'updatedAt' | 'createdAt'
>

export class CreateTicketCommand implements ICommand {
  public constructor(public readonly params: CreateTicketCommandParams) {}
}
