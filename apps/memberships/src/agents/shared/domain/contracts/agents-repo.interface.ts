/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Agent } from '../entity/agent.entity'

export type IAgentsReadableRepo = IReadableRepository<Agent>
export type IAgentsWritableRepo = IWritableRepository<Agent>
