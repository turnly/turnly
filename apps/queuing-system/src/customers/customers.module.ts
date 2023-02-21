/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'customers/shared/infrastructure/persistence/dependency/attach-to-dependency-box'
import 'customers/get-one-customer/dependency/attach-to-dependency-box'
import 'customers/create-customer/dependency/attach-to-dependency-box'

/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import type { Customer } from 'customers/shared/domain/entities/customer.entity'

export class CustomersModule {
  public static getServer(): Producers.QueuingSystem.ICustomersServer {
    return {
      getOne: (...args) => Box.resolve('getOneCustomerServer').execute(...args),
      create: (...args) => Box.resolve('createCustomerServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Customer> {
    return Box.resolve('customersWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Customer> {
    return Box.resolve('customersReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('getOneCustomerQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [Box.resolve('createCustomerCommandHandler')]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
