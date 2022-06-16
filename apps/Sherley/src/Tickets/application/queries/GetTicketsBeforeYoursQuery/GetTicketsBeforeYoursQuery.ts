import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export type GetTicketsBeforeYoursQueryPayload = {
  ticketId: Guid
  customerId: Guid
  companyId: Guid
}

export class GetTicketsBeforeYoursQuery implements IQuery {
  public constructor(
    public readonly payload: GetTicketsBeforeYoursQueryPayload
  ) {}
}
