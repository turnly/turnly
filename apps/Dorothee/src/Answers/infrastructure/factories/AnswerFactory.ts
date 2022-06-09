import { ICommandHandler, IQueryHandler } from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateAnswerBatchCommandHandler } from 'Answers/application/commands/CreateAnswerBatchCommand'

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
      Box.resolve<CreateAnswerBatchCommandHandler>(
        'createAnswerBatchCommandHandler'
      ),
    ]
  }
}
