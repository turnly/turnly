import { Box, ElasticClient, ioc } from '@turnly/shared'
import { CreateAnswerBulkCommandHandler } from 'Answers/application/commands/CreateAnswerBulkCommand'

import { AnswersController } from '../api/controllers/AnswersController'
import { ANSWERS_ELASTIC_CLIENT_CONFIG } from '../configs/AnswersElasticClient'
import { AnswerMapper } from '../persistence/mongo/entity-model-mappers/AnswerMapper'
import { AnswerWritableRepo } from '../persistence/mongo/repositories/AnswerWritableRepo'

/**
 * Registers dependencies for the Fields repos
 */
Box.register({
  fieldsElasticClient: ioc
    .asFunction(async () =>
      new ElasticClient(ANSWERS_ELASTIC_CLIENT_CONFIG).connect()
    )
    .singleton(),
})

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
