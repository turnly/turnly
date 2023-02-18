/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateAnswersBulkController } from '../api/create-answers-bulk.controller'
import { CreateAnswersBulkServer } from '../api/create-answers-bulk.server'
import { CreateAnswersBulkCommandHandler } from '../commands/create-answers-bulk.command-handler'

Box.register({
  createAnswersBulkServer: ioc.asClass(CreateAnswersBulkServer).singleton(),
  createAnswersBulkController: ioc
    .asClass(CreateAnswersBulkController)
    .singleton(),
  createAnswersBulkCommandHandler: ioc
    .asClass(CreateAnswersBulkCommandHandler)
    .singleton(),
})
