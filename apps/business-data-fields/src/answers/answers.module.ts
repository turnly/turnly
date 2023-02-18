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
import 'answers/shared/infrastructure/persistence/dependency/attach-to-dependency-box'
import 'answers/list-answers-by-field/dependency/attach-to-dependency-box'

/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/rpc'
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

export class AnswersModule {
  public static getServer(): Producers.BusinessDataFields.IAnswersServer {
    return {
      create: (..._args) =>
        Box.resolve('createAnswersBulkServer').execute(..._args),
      listByField: (...args) =>
        Box.resolve('listAnswersByFieldServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Answer> {
    return Box.resolve('answersWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Answer> {
    return Box.resolve('answersReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('listAnswersByFieldQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [Box.resolve('createAnswersBulkCommandHandler')]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
