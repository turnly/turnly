import { IQuery } from '@turnly/shared'
import { GetTicketPayload } from 'Tickets/domain/payloads/GetTicketPayload'

export class TicketByIdQuery implements IQuery {
  public constructor(public readonly params: GetTicketPayload) {}
}
