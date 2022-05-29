import { Controller, InputValidator, TimeoutHandler } from '@turnly/shared'
import { ICreateTicketUseCase } from 'Tickets/domain/contracts/use-cases/ICreateTicketUseCase'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

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
  public async take(params: CreateTicketPayload) {
    const ticket = await this.createTicketUseCase.present(params)

    return this.respond.created(TicketDTO.create(ticket.toObject()))
  }
}
