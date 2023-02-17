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
import 'Tickets/Shared/infrastructure/persistence/dependency/attach-to-dependency-box'
import 'Tickets/CreateTicket/dependency/attach-to-dependency-box'
import 'Tickets/AnnounceTicket/dependency/attach-to-dependency-box'
import 'Tickets/LeaveTicket/dependency/attach-to-dependency-box'
import 'Tickets/CallTicket/dependency/attach-to-dependency-box'
import 'Tickets/DiscardTicket/dependency/attach-to-dependency-box'
import 'Tickets/ServeTicket/dependency/attach-to-dependency-box'
import 'Tickets/ReturnToQueue/dependency/attach-to-dependency-box'

import { NotImplementedError } from '@turnly/common'
/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/rpc'
import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import type { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

export class TicketsModule {
  public static getServer(): Producers.QueuingSystem.ITicketsServer {
    return {
      getDetails: (..._args) => new NotImplementedError(),
      call: (..._args) => Box.resolve('callTicketServer').execute(..._args),
      getOne: (..._args) => new NotImplementedError(),
      getTicketsBeforeYours: (..._args) => new NotImplementedError(),
      getTicketsForServingFromLocation: (..._args) => new NotImplementedError(),
      leave: (..._args) => Box.resolve('leaveTicketServer').execute(..._args),
      announce: (..._args) =>
        Box.resolve('announceTicketServer').execute(..._args),
      serve: (..._args) => Box.resolve('serveTicketServer').execute(..._args),
      getTicketsWaitingForService: (..._args) => new NotImplementedError(),
      returnToQueue: (..._args) =>
        Box.resolve('returnToQueueServer').execute(..._args),
      discard: (..._args) =>
        Box.resolve('discardTicketServer').execute(..._args),
      create: (...args) => Box.resolve('createTicketServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Ticket> {
    return Box.resolve('ticketsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Ticket> {
    return Box.resolve('ticketsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve('createTicketCommandHandler'),
      Box.resolve('leaveTicketCommandHandler'),
      Box.resolve('announceTicketCommandHandler'),
      Box.resolve('callTicketCommandHandler'),
      Box.resolve('discardTicketCommandHandler'),
      Box.resolve('serveTicketCommandHandler'),
      Box.resolve('returnToQueueCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
