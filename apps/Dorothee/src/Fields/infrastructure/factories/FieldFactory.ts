import { ICommandHandler, IQueryHandler } from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateFieldCommandHandler } from 'Fields/application/commands/CreateFieldCommand'
import { SaveFieldReadingDBCommandHandler } from 'Fields/application/commands/SaveFieldReadingDBCommand'
import { FieldByIdQueryHandler } from 'Fields/application/queries'

import { FieldsController } from '../api/controllers/FieldsController'

export class FieldFactory {
  public static getController(): FieldsController {
    return Box.resolve<FieldsController>('fieldsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<FieldByIdQueryHandler>('fieldByServiceIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateFieldCommandHandler>('createFieldCommandHandler'),
      Box.resolve<SaveFieldReadingDBCommandHandler>(
        'saveFieldReadingDBCommandHandler'
      ),
    ]
  }
}
