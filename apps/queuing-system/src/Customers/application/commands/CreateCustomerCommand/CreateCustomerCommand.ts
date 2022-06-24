import { EntityAttributes, ICommand } from '@turnly/shared'
import { Customer } from 'Customers/domain/entities/Customer'

export type CreateCustomerParams = Omit<EntityAttributes<Customer>, 'id'>

export class CreateCustomersCommand implements ICommand {
  public constructor(public readonly params: CreateCustomerParams) {}
}
