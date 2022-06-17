import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export type TicketsBeforeYoursQueryPayload = {
  ticketId: Guid
  customerId: Guid
  companyId: Guid
}

export class TicketsBeforeYoursQuery implements IQuery {
  public constructor(public readonly payload: TicketsBeforeYoursQueryPayload) {}
}
