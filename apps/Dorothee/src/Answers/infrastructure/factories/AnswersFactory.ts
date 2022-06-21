import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateAnswerBulkCommandHandler } from 'Answers/application/commands/CreateAnswerBulkCommand'

import { AnswersController } from '../api/controllers/AnswersController'

export class AnswersFactory {
  public static getController(): AnswersController {
    return Box.resolve<AnswersController>('answersController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateAnswerBulkCommandHandler>(
        'createAnswerBulkCommandHandler'
      ),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
