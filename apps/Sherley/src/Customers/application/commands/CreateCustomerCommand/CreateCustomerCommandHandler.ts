import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { ICustomerWritableRepo } from 'Customers/domain/contracts/ICustomersRepo'
import { Customer } from 'Customers/domain/entities/Customer'

import { CreateCustomersCommand } from './CreateCustomerCommand'

@CommandHandler(CreateCustomersCommand)
export class CreateCustomerCommandHandler
  implements ICommandHandler<CreateCustomersCommand, Customer>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly customerWritableRepo: ICustomerWritableRepo
  ) {}

  public async execute({ payload }: CreateCustomersCommand) {
    const customer = Customer.create(payload)

    await this.customerWritableRepo.save(customer)

    this.eventBus.publish(customer.pull())

    return customer
  }
}
