import { ICommandHandler, IQueryHandler } from '@turnly/core'
import { Box } from '@turnly/core'
import { CreateAnswerCommandHandler } from 'Answers/application/commands/CreateAnswerCommand'
import { SaveAnswerReadingDBCommandHandler } from 'Answers/application/commands/SaveAnswerReadingDBCommand'

import { AnswersController } from '../api/controllers/AnswersController'

export class AnswerFactory {
  public static getController(): AnswersController {
    return Box.resolve<AnswersController>('answersController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateAnswerCommandHandler>('createAnswerCommandHandler'),
      Box.resolve<SaveAnswerReadingDBCommandHandler>(
        'saveAnswerReadingDBCommandHandler'
      ),
    ]
  }
}
