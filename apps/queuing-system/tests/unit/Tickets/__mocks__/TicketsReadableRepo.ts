/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketsReadableRepo
  extends TestReadableRepo<Ticket>
  implements IReadableRepository<Ticket> {}
