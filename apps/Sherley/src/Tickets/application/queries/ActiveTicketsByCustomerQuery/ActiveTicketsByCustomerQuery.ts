import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class ActiveTicketsByCustomerQuery implements IQuery {
  public constructor(
    public readonly customerId: Guid,
    public readonly companyId: Guid
  ) {}
}
