import { ICommand } from '@turnly/shared'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

export class CreateTicketCommand implements ICommand {
  public constructor(
    public readonly params: {
      payload: CreateTicketPayload
      publishEventsInstantly?: boolean
    }
  ) {}
}
