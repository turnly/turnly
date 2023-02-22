/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BadRequestException,
  Nullable,
  ResourceNotFoundException,
} from '@turnly/common'
import {
  Controller,
  ICommandBus,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import {
  AnnounceTicketCommand,
  AnnounceTicketParams,
} from 'Tickets/application/commands/AnnounceTicketCommand'
import {
  CallTicketCommand,
  CallTicketParams,
} from 'Tickets/application/commands/CallTicketCommand'
import {
  CreateTicketCommand,
  CreateTicketCommandParams,
} from 'Tickets/application/commands/CreateTicketCommand'
import {
  DiscardTicketCommand,
  DiscardTicketParams,
} from 'Tickets/application/commands/DiscardTicketCommand'
import {
  LeaveTicketCommand,
  LeaveTicketParams,
} from 'Tickets/application/commands/LeaveTicketCommand'
import {
  ReturnToQueueCommand,
  ReturnToQueueParams,
} from 'Tickets/application/commands/ReturnToQueueCommand'
import {
  ServeTicketCommand,
  ServeTicketParams,
} from 'Tickets/application/commands/ServeTicketCommand'
import { TicketByIdQuery } from 'Tickets/application/queries/TicketByIdQuery'
import { TicketsBeforeYoursQuery } from 'Tickets/application/queries/TicketsBeforeYoursQuery'
import {
  TicketsByLocationFilters,
  TicketsByLocationParams,
  TicketsForServingFromLocationQuery,
} from 'Tickets/application/queries/TicketsForServingFromLocationQuery'
import {
  TicketsWaitingFor,
  TicketsWaitingForServiceQuery,
} from 'Tickets/application/queries/TicketsWaitingForServiceQuery'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

import { validator } from '../validators/TicketsValidator'

export class TicketsController extends Controller {
  public constructor(
    private readonly queryBus: IQueryBus,
    private readonly commandBus: ICommandBus
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: CreateTicketCommandParams) {
    const ticket = await this.commandBus.execute<Ticket, CreateTicketCommand>(
      new CreateTicketCommand(params)
    )

    return this.respond.created(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: TicketByIdQuery & { customerId: string }) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new TicketByIdQuery(params.id, params.organizationId)
    )

    if (!ticket || !ticket.isOwnedBy(params.customerId))
      throw new ResourceNotFoundException()

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getDetails)
  public async getDetails(params: TicketByIdQuery) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new TicketByIdQuery(params.id, params.organizationId)
    )

    if (!ticket) throw new ResourceNotFoundException()

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.call)
  public async call(params: CallTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, CallTicketCommand>(
      new CallTicketCommand(params)
    )

    return this.respond.created(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.leave)
  public async leave(params: LeaveTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, LeaveTicketCommand>(
      new LeaveTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.announce)
  public async announce(params: AnnounceTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, AnnounceTicketCommand>(
      new AnnounceTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.serve)
  public async serve(params: ServeTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, ServeTicketCommand>(
      new ServeTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.discard)
  public async discard(params: DiscardTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, DiscardTicketCommand>(
      new DiscardTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.returnToQueue)
  public async returnToQueue(params: ReturnToQueueParams) {
    const ticket = await this.commandBus.execute<Ticket, ReturnToQueueCommand>(
      new ReturnToQueueCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getTicketsBeforeYours)
  public async getTicketsBeforeYours(params: TicketsBeforeYoursQuery) {
    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      new TicketsBeforeYoursQuery(
        params.ticketId,
        params.customerId,
        params.organizationId
      )
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }

  @TimeoutHandler()
  @InputValidator(validator.getTicketsForServingFromLocation)
  public async getTicketsForServingFromLocation(
    params: TicketsByLocationParams
  ) {
    const statuses = {
      [TicketsByLocationFilters.WAITING]: [
        TicketStatus.ANNOUNCED,
        TicketStatus.RETURNED,
        TicketStatus.CALLED,
        TicketStatus.RECALLED,
      ],
      [TicketsByLocationFilters.DISCARDED]: [TicketStatus.DISCARDED],
    }

    const status = statuses[params.status ?? TicketsByLocationFilters.WAITING]
    if (!status)
      throw new BadRequestException(
        'Oops! seems that this status is not valid.'
      )

    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      new TicketsForServingFromLocationQuery(
        params.locationId,
        params.organizationId,
        status,
        params.searchQuery,
        params.serviceIds
      )
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }

  @TimeoutHandler()
  @InputValidator(validator.getTicketsWaitingForService)
  public async getTicketsWaitingForService(
    params: TicketsWaitingForServiceQuery
  ) {
    const tickets = await this.queryBus.ask<TicketsWaitingFor[]>(
      new TicketsWaitingForServiceQuery(
        params.serviceIds,
        params.organizationId
      )
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(
      tickets.map(({ waitingFor, tickets }) => ({
        waitingFor,
        tickets: tickets.map(ticket => ticket.toObject()),
      }))
    )
  }
}
