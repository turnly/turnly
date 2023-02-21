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
import 'Tickets/Shared/dependency/attach-to-dependency-box'
import 'Tickets/CreateTicket/dependency/attach-to-dependency-box'
import 'Tickets/AnnounceTicket/dependency/attach-to-dependency-box'
import 'Tickets/LeaveTicket/dependency/attach-to-dependency-box'
import 'Tickets/CallTicket/dependency/attach-to-dependency-box'
import 'Tickets/DiscardTicket/dependency/attach-to-dependency-box'
import 'Tickets/ServeTicket/dependency/attach-to-dependency-box'
import 'Tickets/ReturnToQueue/dependency/attach-to-dependency-box'
import 'Tickets/CreateTicketReadingDB/dependency/attach-to-dependency-box'
import 'Tickets/get-one-ticket/dependency/attach-to-dependency-box'
import 'Tickets/get-tickets-waiting-for-service/dependency/attach-to-dependency-box'
import 'Tickets/TicketsBeforeYours/dependency/attach-to-dependency-box'
import 'Tickets/TicketsForServingFromLocation/dependency/attach-to-dependency-box'
import 'Tickets/NotifyCustomerCalled/dependency/attach-to-dependency-box'
import 'Tickets/GetTicketDetails/dependency/attach-to-dependency-box'

import { Producers } from '@turnly/grpc'
/**
 * Module
 *
 * @description Module definition.
 */
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
      getDetails: (...args) =>
        Box.resolve('getTicketDetailsServer').execute(...args),
      call: (...args) => Box.resolve('callTicketServer').execute(...args),
      getOne: (...args) => Box.resolve('getOneTicketServer').execute(...args),
      getTicketsBeforeYours: (...args) =>
        Box.resolve('ticketsBeforeYoursServer').execute(...args),
      getTicketsForServingFromLocation: (...args) =>
        Box.resolve('ticketsForServingFromLocationServer').execute(...args),
      leave: (...args) => Box.resolve('leaveTicketServer').execute(...args),
      announce: (...args) =>
        Box.resolve('announceTicketServer').execute(...args),
      serve: (...args) => Box.resolve('serveTicketServer').execute(...args),
      getTicketsWaitingForService: (...args) =>
        Box.resolve('getTicketsWaitingForServiceServer').execute(...args),
      returnToQueue: (...args) =>
        Box.resolve('returnToQueueServer').execute(...args),
      discard: (...args) => Box.resolve('discardTicketServer').execute(...args),
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
    return [
      Box.resolve('getOneTicketQueryHandler'),
      Box.resolve('getTicketsWaitingForServiceQueryHandler'),
      Box.resolve('ticketsBeforeYoursQueryHandler'),
      Box.resolve('ticketsForServingFromLocationQueryHandler'),
      Box.resolve('activeTicketsByCustomerQueryHandler'),
      Box.resolve('getAnUnexpiredTicketQueryHandler'),
    ]
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
      Box.resolve('createTicketReadingDBCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [
      Box.resolve('createTicketReadingDBSubscriber'),
      Box.resolve('notifyCustomerCalledSubscriber'),
    ]
  }
}
