/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListAnswersByFieldController } from './list-answers-by-field.controller'
import { ListAnswersByFieldQueryHandler } from './list-answers-by-field.query-handler'
import { ListAnswersByFieldServer } from './list-answers-by-field.server'

Box.register({
  listAnswersByFieldServer: ioc.asClass(ListAnswersByFieldServer).singleton(),
  listAnswersByFieldController: ioc
    .asClass(ListAnswersByFieldController)
    .singleton(),
  listAnswersByFieldQueryHandler: ioc
    .asClass(ListAnswersByFieldQueryHandler)
    .singleton(),
})
