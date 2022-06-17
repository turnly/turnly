import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export type GetActiveTicketsByCustomerPayload = {
  customerId: Guid
  companyId: Guid
}

export class ActiveTicketsByCustomerQuery implements IQuery {
  public constructor(
    public readonly payload: GetActiveTicketsByCustomerPayload
  ) {}
}
