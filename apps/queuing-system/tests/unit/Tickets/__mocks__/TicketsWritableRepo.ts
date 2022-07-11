/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/shared'
import { TestWritableRepo } from '@turnly/testing'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketsWritableRepo
  extends TestWritableRepo<Ticket>
  implements IWritableRepository<Ticket> {}
