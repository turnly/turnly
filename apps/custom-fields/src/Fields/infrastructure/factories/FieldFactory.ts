import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { SearchCustomerFieldsByServiceQueryHandler } from 'Fields/application/queries/SearchCustomerFieldsByServiceQuery'

import { FieldsController } from '../api/controllers/FieldsController'

export class FieldFactory {
  public static getController(): FieldsController {
    return Box.resolve<FieldsController>('fieldsController')
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
