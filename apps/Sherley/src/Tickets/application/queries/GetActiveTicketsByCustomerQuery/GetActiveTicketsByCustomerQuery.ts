import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class GetActiveTicketsByCustomerQuery implements IQuery {
  public constructor(public readonly customerId: Guid) {}
}
