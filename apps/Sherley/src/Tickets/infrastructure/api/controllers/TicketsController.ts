import { Nullable, ResourceNotFoundException } from '@turnly/common'
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
  CreateTicketCommand,
  CreateTicketCommandParams,
} from 'Tickets/application/commands/CreateTicketCommand'
import {
  LeaveTicketCommand,
  LeaveTicketParams,
} from 'Tickets/application/commands/LeaveTicketCommand'
import { TicketByIdQuery } from 'Tickets/application/queries/TicketByIdQuery'
import { TicketsBeforeYoursQuery } from 'Tickets/application/queries/TicketsBeforeYoursQuery'
import {
  TicketsWaitingFor,
  TicketsWaitingForServiceQuery,
} from 'Tickets/application/queries/TicketsWaitingForServiceQuery'
import { Ticket } from 'Tickets/domain/entities/Ticket'

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
    const ticket = await this.commandBus.execute<CreateTicketCommand, Ticket>(
      new CreateTicketCommand(params)
    )

    return this.respond.created(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: TicketByIdQuery) {
    const ticket = await this.queryBus.ask<TicketByIdQuery, Nullable<Ticket>>(
      new TicketByIdQuery(params.id, params.customerId, params.companyId)
    )

    if (!ticket) throw new ResourceNotFoundException()

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.leave)
  public async leave(params: LeaveTicketParams) {
    const ticket = await this.commandBus.execute<LeaveTicketCommand, Ticket>(
      new LeaveTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.announce)
  public async announce(params: AnnounceTicketParams) {
    const ticket = await this.commandBus.execute<AnnounceTicketCommand, Ticket>(
      new AnnounceTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getTicketsBeforeYours)
  public async getTicketsBeforeYours(params: TicketsBeforeYoursQuery) {
    const tickets = await this.queryBus.ask<
      TicketsBeforeYoursQuery,
      Nullable<Ticket[]>
    >(
      new TicketsBeforeYoursQuery(
        params.ticketId,
        params.customerId,
        params.companyId
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
    const tickets = await this.queryBus.ask<
      TicketsWaitingForServiceQuery,
      TicketsWaitingFor[]
    >(new TicketsWaitingForServiceQuery(params.serviceIds, params.companyId))

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(
      tickets.map(({ waitingFor, tickets }) => ({
        waitingFor,
        tickets: tickets.map(ticket => ticket.toObject()),
      }))
    )
  }
}
