/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export type ITicketsMapper<Model> = IEntityMapper<Ticket, Model>
