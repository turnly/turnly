import { ICommand } from '@turnly/core'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

export class CreateTicketCommand implements ICommand {
  public constructor(
    public readonly params: {
      payload: CreateTicketPayload
      publishEventsInstantly?: boolean
    }
  ) {}
}
