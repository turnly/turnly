/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

export class TicketsReadableRepo
  extends TestReadableRepo<Ticket>
  implements IReadableRepository<Ticket> {}
