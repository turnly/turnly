/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateAnswersBulkController } from '../api/CreateAnswersBulkController'
import { CreateAnswersBulkServer } from '../api/CreateAnswersBulkServer'
import { CreateAnswersBulkCommandHandler } from '../commands/CreateAnswersBulkCommandHandler'

Box.register({
  createAnswersBulkServer: ioc.asClass(CreateAnswersBulkServer).singleton(),
  createAnswersBulkController: ioc
    .asClass(CreateAnswersBulkController)
    .singleton(),
  createAnswersBulkCommandHandler: ioc
    .asClass(CreateAnswersBulkCommandHandler)
    .singleton(),
})
