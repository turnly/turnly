import { Controller, InputValidator, TimeoutHandler } from '@turnly/core'
import { TakeTicketUseCase } from 'Tickets/application/use-cases/TakeTicketUseCase'
import { TakeTicketPayload } from 'Tickets/domain/contracts/use-cases/ITakeTicketUseCase'

import { TicketDTO } from '../dtos/TicketDTO'
import { validator } from '../validators/TicketsValidator'

export class TicketsController extends Controller {
  public constructor(private readonly takeTicketUseCase: TakeTicketUseCase) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async take(params: TakeTicketPayload) {
    const ticket = await this.takeTicketUseCase.present(params)

    return this.respond.created(TicketDTO.create(ticket.toObject()))
  }
}
