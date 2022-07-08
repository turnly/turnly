/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TestReadableRepo } from '../../../shared/__mocks__/TestReadableRepo'

export class TicketsReadableRepo
  extends TestReadableRepo<Ticket>
  implements IReadableRepository<Ticket> {}
