/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { AnswersMapper } from '../mongo/entity-model-mappers/AnswersMapper'
import { AnswersReadableRepo } from '../mongo/repositories/AnswersReadableRepo'
import { AnswersWritableRepo } from '../mongo/repositories/AnswersWritableRepo'

Box.register({
  answersMapper: ioc.asClass(AnswersMapper).singleton(),
  answersReadableRepo: ioc.asClass(AnswersReadableRepo).singleton(),
  answersWritableRepo: ioc.asClass(AnswersWritableRepo).singleton(),
})
