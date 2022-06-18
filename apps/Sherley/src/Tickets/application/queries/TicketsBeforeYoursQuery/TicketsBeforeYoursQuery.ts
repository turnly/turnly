import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class TicketsBeforeYoursQuery implements IQuery {
  public constructor(
    public readonly ticketId: Guid,
    public readonly customerId: Guid,
    public readonly companyId: Guid
  ) {}
}
