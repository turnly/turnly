/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TestWritableRepo } from '../../../shared/__mocks__/TestWritableRepo'

export class TicketsWritableRepo
  extends TestWritableRepo<Ticket>
  implements IWritableRepository<Ticket> {}
