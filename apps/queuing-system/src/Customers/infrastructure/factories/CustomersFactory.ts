/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { CreateCustomerCommandHandler } from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQueryHandler } from 'Customers/application/queries/CustomerByIdQuery'
import { Customer } from 'Customers/domain/entities/Customer'

import { CustomersController } from '../api/controllers/CustomersController'
import { CustomerReadableRepo } from '../persistence/mongo/repositories/CustomerReadableRepo'
import { CustomerWritableRepo } from '../persistence/mongo/repositories/CustomerWritableRepo'

export class CustomersFactory {
  public static getController(): CustomersController {
    return Box.resolve<CustomersController>('customersController')
  }

  public static getWritableRepo(): IWritableRepository<Customer> {
    return Box.resolve<CustomerWritableRepo>('customerWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Customer> {
    return Box.resolve<CustomerReadableRepo>('customerReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<CustomerByIdQueryHandler>('customerByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateCustomerCommandHandler>('createCustomerCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
