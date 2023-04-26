/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateAnswersBulkCommandHandler } from './create-answers-bulk.command-handler'
import { CreateAnswersBulkController } from './create-answers-bulk.controller'
import { CreateAnswersBulkServer } from './create-answers-bulk.server'

Box.register({
  createAnswersBulkServer: ioc.asClass(CreateAnswersBulkServer).singleton(),
  createAnswersBulkController: ioc
    .asClass(CreateAnswersBulkController)
    .singleton(),
  createAnswersBulkCommandHandler: ioc
    .asClass(CreateAnswersBulkCommandHandler)
    .singleton(),
})
