/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneAgentQueryHandler } from '../application/queries'
import { AgentsMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/agents.mapper'
import { AgentsReadableRepo } from '../infrastructure/persistence/mongo/repositories/agents-readable.repo'
import { AgentsWritableRepo } from '../infrastructure/persistence/mongo/repositories/agents-writable.repo'

Box.register({
  agentsMapper: ioc.asClass(AgentsMapper).singleton(),
  agentsReadableRepo: ioc.asClass(AgentsReadableRepo).singleton(),
  agentsWritableRepo: ioc.asClass(AgentsWritableRepo).singleton(),
  getOneAgentQueryHandler: ioc.asClass(GetOneAgentQueryHandler).singleton(),
})
