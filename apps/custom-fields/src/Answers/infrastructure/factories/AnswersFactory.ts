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
import { CreateAnswerBulkCommandHandler } from 'Answers/application/commands/CreateAnswerBulkCommand'
import { Answer } from 'Answers/domain/entities/Answer'

import { AnswersController } from '../api/controllers/AnswersController'
import { AnswersReadableRepo } from '../persistence/mongo/repositories/AnswersReadableRepo'
import { AnswersWritableRepo } from '../persistence/mongo/repositories/AnswersWritableRepo'

export class AnswersFactory {
  public static getController(): AnswersController {
    return Box.resolve<AnswersController>('answersController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getWritableRepo(): IWritableRepository<Answer> {
    return Box.resolve<AnswersWritableRepo>('answersWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Answer> {
    return Box.resolve<AnswersReadableRepo>('answersReadableRepo')
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
