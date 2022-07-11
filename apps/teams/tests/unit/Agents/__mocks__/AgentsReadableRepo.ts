/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Agent } from 'Agents/domain/entities/Agent'

export class AgentsReadableRepo
  extends TestReadableRepo<Agent>
  implements IReadableRepository<Agent> {}
