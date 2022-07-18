/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Agent } from '../entities/Agent'

export type IAgentsReadableRepo = IReadableRepository<Agent>
export type IAgentsWritableRepo = IWritableRepository<Agent>
