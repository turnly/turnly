/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { AnswersMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/answers.mapper'
import { AnswersReadableRepo } from '../infrastructure/persistence/mongo/repositories/answers-readable.repo'
import { AnswersWritableRepo } from '../infrastructure/persistence/mongo/repositories/answers-writable.repo'

Box.register({
  answersMapper: ioc.asClass(AnswersMapper).singleton(),
  answersReadableRepo: ioc.asClass(AnswersReadableRepo).singleton(),
  answersWritableRepo: ioc.asClass(AnswersWritableRepo).singleton(),
})
