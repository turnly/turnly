/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Ticket } from '../entities/ticket.entity'

export type ITicketsReadableRepo = IReadableRepository<Ticket>
export type ITicketsWritableRepo = IWritableRepository<Ticket>
