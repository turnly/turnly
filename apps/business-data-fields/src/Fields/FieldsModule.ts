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
import 'Fields/Shared/infrastructure/persistence/dependency/attach-to-dependency-box'
import 'Fields/SearchCustomerFieldsByService/dependency/attach-to-dependency-box'

/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/rpc'
import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import type { Field } from 'Fields/Shared/domain/entities/Field'

export class FieldsModule {
  public static getServer(): Producers.BusinessDataFields.IFieldsServer {
    return {
      findCustomerFieldsByService: (...args) =>
        Box.resolve('searchCustomerFieldsByServiceServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Field> {
    return Box.resolve('fieldsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Field> {
    return Box.resolve('fieldsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('searchCustomerFieldsByServiceQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
