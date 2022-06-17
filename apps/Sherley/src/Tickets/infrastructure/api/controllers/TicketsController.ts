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
      new TicketByIdQuery(params.id, params.companyId)
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
}
