/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { AgentByIdQueryHandler } from 'Agents/application/queries/AgentByIdQuery'
import { AgentByUserIdQueryHandler } from 'Agents/application/queries/AgentByUserIdQuery'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentsController } from '../api/controllers/AgentsController'
import { AgentsReadableRepo } from '../persistence/mongo/repositories/AgentsReadableRepo'
import { AgentsWritableRepo } from '../persistence/mongo/repositories/AgentsWritableRepo'

export class AgentsFactory {
  public static getController(): AgentsController {
    return Box.resolve<AgentsController>('agentsController')
  }

  public static getWritableRepo(): IWritableRepository<Agent> {
    return Box.resolve<AgentsWritableRepo>('agentsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Agent> {
    return Box.resolve<AgentsReadableRepo>('agentsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<AgentByIdQueryHandler>('agentByIdQueryHandler'),
      Box.resolve<AgentByUserIdQueryHandler>('agentByUserIdQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
