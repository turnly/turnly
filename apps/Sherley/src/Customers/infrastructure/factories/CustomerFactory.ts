import { ICommandHandler, IQueryHandler } from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateCustomerCommandHandler } from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQueryHandler } from 'Customers/application/queries'

import { CustomersController } from '../api/controllers/CustomersController'

export class CustomerFactory {
  public static getController(): CustomersController {
    return Box.resolve<CustomersController>('customersController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<CustomerByIdQueryHandler>('customerByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateCustomerCommandHandler>('createCustomerCommandHandler'),
    ]
  }
}
