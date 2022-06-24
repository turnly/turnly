import { ICommand } from '@turnly/shared'
import { CreateTicketParams } from 'Tickets/domain/entities/Ticket'

export type CreateTicketCommandParams = Omit<
  CreateTicketParams,
  'displayCode' | 'status' | 'priority' | 'rating' | 'updatedAt' | 'createdAt'
>

export class CreateTicketCommand implements ICommand {
  public constructor(public readonly params: CreateTicketCommandParams) {}
}
