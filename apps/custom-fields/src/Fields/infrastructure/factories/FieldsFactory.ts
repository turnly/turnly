/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { SearchCustomerFieldsByServiceQueryHandler } from 'Fields/application/queries/SearchCustomerFieldsByServiceQuery'
import { Field } from 'Fields/domain/entities/Field'

import { FieldsController } from '../api/controllers/FieldsController'
import { FieldsReadableRepo } from '../persistence/mongo/repositories/FieldsReadableRepo'
import { FieldsWritableRepo } from '../persistence/mongo/repositories/FieldsWritableRepo'

export class FieldsFactory {
  public static getController(): FieldsController {
    return Box.resolve<FieldsController>('fieldsController')
  }

  public static getWritableRepo(): IWritableRepository<Field> {
    return Box.resolve<FieldsWritableRepo>('fieldsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Field> {
    return Box.resolve<FieldsReadableRepo>('fieldsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<SearchCustomerFieldsByServiceQueryHandler>(
        'findCustomerFieldsByServiceQueryHandler'
      ),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
