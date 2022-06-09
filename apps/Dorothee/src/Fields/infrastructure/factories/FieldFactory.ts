import { ICommandHandler, IQueryHandler } from '@turnly/shared'
import { Box } from '@turnly/shared'
import { FieldByIdQueryHandler } from 'Fields/application/queries/FieldByServiceIdQuery'

import { FieldsController } from '../api/controllers/FieldsController'

export class FieldFactory {
  public static getController(): FieldsController {
    return Box.resolve<FieldsController>('fieldsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<FieldByIdQueryHandler>('fieldByServiceIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }
}
