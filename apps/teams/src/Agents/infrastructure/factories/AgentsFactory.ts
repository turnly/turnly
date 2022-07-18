/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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
    return [Box.resolve<AgentByIdQueryHandler>('agentByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
