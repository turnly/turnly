/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { CreateAnswerBulkCommandHandler } from 'Answers/application/commands/CreateAnswerBulkCommand'

import { AnswersController } from '../api/controllers/AnswersController'
import { AnswersMapper } from '../persistence/mongo/entity-model-mappers/AnswersMapper'
import { AnswersReadableRepo } from '../persistence/mongo/repositories/AnswersReadableRepo'
import { AnswersWritableRepo } from '../persistence/mongo/repositories/AnswersWritableRepo'

Box.register({
  answersMapper: ioc.asClass(AnswersMapper).singleton(),
  answersWritableRepo: ioc.asClass(AnswersWritableRepo).singleton(),
  answersReadableRepo: ioc.asClass(AnswersReadableRepo).singleton(),
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
