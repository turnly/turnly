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
import 'tickets/shared/dependency/attach-to-dependency-box'
import 'tickets/create-ticket/dependency/attach-to-dependency-box'
import 'tickets/announce-my-arrival/dependency/attach-to-dependency-box'
import 'tickets/leave-the-queue/dependency/attach-to-dependency-box'
import 'tickets/call-ticket-to-desk/dependency/attach-to-dependency-box'
import 'tickets/mark-ticket-as-discarded/dependency/attach-to-dependency-box'
import 'tickets/mark-ticket-as-served/dependency/attach-to-dependency-box'
import 'tickets/return-ticket-to-queue/dependency/attach-to-dependency-box'
import 'tickets/get-one-ticket/dependency/attach-to-dependency-box'
import 'tickets/list-tickets-waiting-for-service/dependency/attach-to-dependency-box'
import 'tickets/list-tickets-before-yours/dependency/attach-to-dependency-box'
import 'tickets/search-tickets-for-serving-from-location/dependency/attach-to-dependency-box'
import 'tickets/notify-customer-called/dependency/attach-to-dependency-box'
import 'tickets/get-ticket-details/dependency/attach-to-dependency-box'

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
import type { Ticket } from 'tickets/shared/domain/entities/Ticket'

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
        Box.resolve('announceMyArrivalServer').execute(...args),
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
      Box.resolve('announceMyArrivalCommandHandler'),
      Box.resolve('callTicketCommandHandler'),
      Box.resolve('discardTicketCommandHandler'),
      Box.resolve('serveTicketCommandHandler'),
      Box.resolve('returnToQueueCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [Box.resolve('notifyCustomerCalledSubscriber')]
  }
}
