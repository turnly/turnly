import { Controller, InputValidator, TimeoutHandler } from '@turnly/shared'
import { CreateTicketCommandPayload } from 'Tickets/application/commands/CreateTicketCommand'
import { ICreateTicketUseCase } from 'Tickets/domain/contracts/use-cases/ICreateTicketUseCase'

import { TicketDTO } from '../dtos/TicketDTO'
import { validator } from '../validators/TicketsValidator'

export class TicketsController extends Controller {
  public constructor(
    private readonly createTicketUseCase: ICreateTicketUseCase
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: CreateTicketCommandPayload) {
    const ticket = await this.createTicketUseCase.present(params)

    return this.respond.created(TicketDTO.create(ticket.toObject()))
  }
}
