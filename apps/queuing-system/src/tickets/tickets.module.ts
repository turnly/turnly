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
import 'tickets/shared/shared.dependency'
import 'tickets/announce-my-arrival/announce-my-arrival.dependency'
import 'tickets/call-ticket-to-desk/call-ticket-to-desk.dependency'
import 'tickets/create-ticket/create-ticket.dependency'
import 'tickets/get-active-tickets-by-customer/get-active-tickets-by-customer.dependency'
import 'tickets/get-an-unexpired-ticket/get-an-unexpired-ticket.dependency'
import 'tickets/get-one-ticket/get-one-ticket.dependency'
import 'tickets/get-ticket-details/get-ticket-details.dependency'
import 'tickets/leave-the-queue/leave-the-queue.dependency'
import 'tickets/list-tickets-before-yours/list-tickets-before-yours.dependency'
import 'tickets/list-tickets-waiting-for-service/list-tickets-waiting-for-service.dependency'
import 'tickets/mark-ticket-as-discarded/mark-ticket-as-discarded.dependency'
import 'tickets/mark-ticket-as-served/mark-ticket-as-served.dependency'
import 'tickets/notify-customer-called/notify-customer-called.dependency'
import 'tickets/return-ticket-to-queue/return-ticket-to-queue.dependency'
import 'tickets/search-tickets-for-serving-from-location/search-tickets-for-serving-from-location.dependency'
import 'tickets/list-tickets-for-signage-displays/list-tickets-for-signage-displays.dependency'

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
} from '@turnly/core'
import { Box } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import type { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { TicketsMappings } from './shared/infrastructure/elasticsearch/tickets.mappings'

export class TicketsModule {
  public static getServer(): Producers.QueuingSystem.ITicketsServer {
    return {
      getDetails: (...args) =>
        Box.resolve('getTicketDetailsServer').execute(...args),
      call: (...args) => Box.resolve('CallTicketToDeskServer').execute(...args),
      getOne: (...args) => Box.resolve('getOneTicketServer').execute(...args),
      getTicketsBeforeYours: (...args) =>
        Box.resolve('listTicketsBeforeYoursServer').execute(...args),
      getTicketsForServingFromLocation: (...args) =>
        Box.resolve('searchTicketsForServingFromLocationServer').execute(
          ...args
        ),
      leave: (...args) => Box.resolve('leaveTheQueueServer').execute(...args),
      announce: (...args) =>
        Box.resolve('announceMyArrivalServer').execute(...args),
      serve: (...args) =>
        Box.resolve('markTicketAsServedServer').execute(...args),
      getTicketsWaitingForService: (...args) =>
        Box.resolve('listTicketsWaitingForServiceServer').execute(...args),
      returnToQueue: (...args) =>
        Box.resolve('returnTicketToQueueServer').execute(...args),
      discard: (...args) =>
        Box.resolve('markTicketAsDiscardedServer').execute(...args),
      create: (...args) => Box.resolve('createTicketServer').execute(...args),
      listTicketsForSignageDisplays: (...args) =>
        Box.resolve('listTicketsForSignageDisplaysServer').execute(...args),
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
      Box.resolve('getActiveTicketsByCustomerQueryHandler'),
      Box.resolve('getAnUnexpiredTicketQueryHandler'),
      Box.resolve('getOneTicketQueryHandler'),
      Box.resolve('listTicketsBeforeYoursQueryHandler'),
      Box.resolve('listTicketsWaitingForServiceQueryHandler'),
      Box.resolve('searchTicketsForServingFromLocationQueryHandler'),
      Box.resolve('listTicketsForSignageDisplaysQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve('createTicketCommandHandler'),
      Box.resolve('leaveTheQueueCommandHandler'),
      Box.resolve('announceMyArrivalCommandHandler'),
      Box.resolve('callTicketToDeskCommandHandler'),
      Box.resolve('markTicketAsDiscardedCommandHandler'),
      Box.resolve('markTicketAsServedCommandHandler'),
      Box.resolve('returnTicketToQueueCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [Box.resolve('notifyCustomerCalledSubscriber')]
  }

  public static getElasticMappings() {
    return [TicketsMappings]
  }
}
