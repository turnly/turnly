/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Ticket } from 'etickets/eshared/domain/entities/Ticket'

export class TicketsReadableRepo
  extends TestReadableRepo<Ticket>
  implements IReadableRepository<Ticket> {}
