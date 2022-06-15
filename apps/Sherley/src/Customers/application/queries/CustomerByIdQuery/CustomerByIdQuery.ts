import { IQuery } from '@turnly/shared'
import { GetCustomerPayload } from 'Customers/domain/payloads/GetCustomerPayload'

export class CustomerByIdQuery implements IQuery {
  public constructor(public readonly params: GetCustomerPayload) {}
}
