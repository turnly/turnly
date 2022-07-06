/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

export type ITicketsReadableRepo = IReadableRepository<Ticket>
export type ITicketsWritableRepo = IWritableRepository<Ticket>
