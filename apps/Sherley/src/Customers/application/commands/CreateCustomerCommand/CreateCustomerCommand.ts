import { ICommand } from '@turnly/shared'
import { CreateCustomerPayload } from 'Customers/domain/payloads/CreateCustomerPayload'

export type CreateCustomerCommandPayload = CreateCustomerPayload

export class CreateCustomersCommand implements ICommand {
  public constructor(public readonly payload: CreateCustomerCommandPayload) {}
}
