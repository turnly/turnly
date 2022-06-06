import { ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { CreateTicketCommandPayload } from 'Tickets/application/commands/CreateTicketCommand'
import { TicketByIdQuery } from 'Tickets/application/queries/TicketByIdQuery'
import { ICreateTicketUseCase } from 'Tickets/domain/contracts/use-cases/ICreateTicketUseCase'
import { GetTicketPayload } from 'Tickets/domain/payloads/GetTicketPayload'

import { TicketDTO } from '../dtos/TicketDTO'
import { validator } from '../validators/TicketsValidator'

export class TicketsController extends Controller {
  public constructor(
    private readonly createTicketUseCase: ICreateTicketUseCase,
    private readonly queryBus: IQueryBus
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: CreateTicketCommandPayload) {
    const ticket = await this.createTicketUseCase.present(params)

    return this.respond.created(TicketDTO.create(ticket.toObject()))
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: GetTicketPayload) {
    const ticket = await this.queryBus.ask(new TicketByIdQuery(params))

    if (!ticket) throw new ResourceNotFoundException()

    return this.respond.ok(TicketDTO.create(ticket.toObject()))
  }
}
