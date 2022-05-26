import { IQuery } from '@turnly/core'
import { Guid } from '@turnly/shared'

export class GetCustomerActiveTicketQuery implements IQuery {
  public constructor(public readonly customerId: Guid) {}
}
