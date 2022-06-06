import { ConflictException, Nullable } from '@turnly/common'
import { ICommandBus, IQueryBus } from '@turnly/shared'
import {
  CreateTicketCommand,
  CreateTicketCommandPayload,
} from 'Tickets/application/commands/CreateTicketCommand'
import { ICreateTicketUseCase } from 'Tickets/domain/contracts/use-cases/ICreateTicketUseCase'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { GetActiveTicketsByCustomerQuery } from '../queries/GetActiveTicketsByCustomerQuery'

export class CreateTicketUseCase implements ICreateTicketUseCase {
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus
  ) {}

  public async present(payload: CreateTicketCommandPayload): Promise<Ticket> {
    const tickets = await this.queryBus.ask<
      GetActiveTicketsByCustomerQuery,
      Nullable<Ticket[]>
    >(new GetActiveTicketsByCustomerQuery(payload.customerId))

    if (tickets)
      throw new ConflictException(
        'Customer already has tickets, cannot create new ticket.'
      )

    return await this.commandBus.execute<CreateTicketCommand, Ticket>(
      new CreateTicketCommand(payload)
    )
  }
}
