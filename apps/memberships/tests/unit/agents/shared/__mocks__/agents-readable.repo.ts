/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

export class AgentsReadableRepo
  extends TestReadableRepo<Agent>
  implements IReadableRepository<Agent> {}
