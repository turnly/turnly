import { ICommand } from '@turnly/shared'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

export type CreateTicketCommandPayload = Omit<
  CreateTicketPayload,
  'displayCode' | 'status' | 'priority' | 'rating' | 'updatedAt' | 'createdAt'
>

export class CreateTicketCommand implements ICommand {
  public constructor(public readonly payload: CreateTicketCommandPayload) {}
}
