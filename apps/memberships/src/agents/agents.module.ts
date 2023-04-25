/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'agents/shared/dependency/attach-to-dependency-box'
import 'agents/get-one-agent/dependency/attach-to-dependency-box'
import 'agents/get-agent-by-user-id/dependency/attach-to-dependency-box'

import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'
import { Box } from '@turnly/core'
/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type { Agent } from 'agents/shared/domain/entity/agent.entity'

export class AgentsModule {
  public static getServer(): Producers.Memberships.IAgentsServer {
    return {
      getOne: (...args) => Box.resolve('getOneAgentServer').execute(...args),
      getByUserId: (...args) =>
        Box.resolve('getAgentByUserIdServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Agent> {
    return Box.resolve('agentsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Agent> {
    return Box.resolve('agentsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('getOneAgentQueryHandler'),
      Box.resolve('getAgentByUserIdQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
