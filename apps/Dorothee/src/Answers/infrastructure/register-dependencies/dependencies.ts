import { Box, ioc } from '@turnly/shared'
import { CreateAnswerCommandHandler } from 'Answers/application/commands/CreateAnswerCommand'
import { SaveAnswerReadingDBCommandHandler } from 'Answers/application/commands/SaveAnswerReadingDBCommand'
import { CreateAnswerUseCase } from 'Answers/application/use-cases/CreateAnswerUseCase'

import { AnswersController } from '../api/controllers/AnswersController'
import { AnswerMapper } from '../persistence/mongo/entity-model-mappers/AnswerMapper'
import { AnswerReadableRepository } from '../persistence/mongo/repositories/AnswerReadableRepository'
import { AnswerWritableRepository } from '../persistence/mongo/repositories/AnswerWritableRepository'

Box.register({
  answersMapper: ioc.asClass(AnswerMapper).singleton(),
  answersReadableRepository: ioc.asClass(AnswerReadableRepository).singleton(),
  answersWritableRepository: ioc.asClass(AnswerWritableRepository).singleton(),
  answersController: ioc.asClass(AnswersController).singleton(),
})

/**
 * Use cases
 */
Box.register({
  createAnswerUseCase: ioc.asClass(CreateAnswerUseCase).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createAnswerCommandHandler: ioc
    .asClass(CreateAnswerCommandHandler)
    .singleton(),
  saveAnswerReadingDBCommandHandler: ioc
    .asClass(SaveAnswerReadingDBCommandHandler)
    .singleton(),
})
