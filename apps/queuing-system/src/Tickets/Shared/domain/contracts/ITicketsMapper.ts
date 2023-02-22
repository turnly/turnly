/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

export type ITicketsMapper<Model> = IEntityMapper<Ticket, Model>
