import { Controller, InputValidator, TimeoutHandler } from '@turnly/shared'
import { TakeTicketUseCase } from 'Tickets/application/use-cases/TakeTicketUseCase'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

import { TicketDTO } from '../dtos/TicketDTO'
import { validator } from '../validators/TicketsValidator'

export class TicketsController extends Controller {
  public constructor(private readonly takeTicketUseCase: TakeTicketUseCase) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async take(params: CreateTicketPayload) {
    const ticket = await this.takeTicketUseCase.present(params)

    return this.respond.created(TicketDTO.create(ticket.toObject()))
  }
}
