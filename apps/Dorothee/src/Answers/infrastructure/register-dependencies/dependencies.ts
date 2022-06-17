import { Box, ioc } from '@turnly/shared'
import { CreateAnswerBulkCommandHandler } from 'Answers/application/commands/CreateAnswerBulkCommand'

import { AnswersController } from '../api/controllers/AnswersController'
import { AnswerMapper } from '../persistence/mongo/entity-model-mappers/AnswerMapper'
import { AnswerWritableRepo } from '../persistence/mongo/repositories/AnswerWritableRepo'

Box.register({
  answersMapper: ioc.asClass(AnswerMapper).singleton(),
  answersWritableRepo: ioc.asClass(AnswerWritableRepo).singleton(),
  answersController: ioc.asClass(AnswersController).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createAnswerBulkCommandHandler: ioc
    .asClass(CreateAnswerBulkCommandHandler)
    .singleton(),
})
