/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ListAnswersByFieldController } from '../api/ListAnswersByFieldController'
import { ListAnswersByFieldServer } from '../api/ListAnswersByFieldServer'
import { ListAnswersByFieldQueryHandler } from '../queries/ListAnswersByFieldQueryHandler'

Box.register({
  listAnswersByFieldServer: ioc.asClass(ListAnswersByFieldServer).singleton(),
  listAnswersByFieldController: ioc
    .asClass(ListAnswersByFieldController)
    .singleton(),
  listAnswersByFieldQueryHandler: ioc
    .asClass(ListAnswersByFieldQueryHandler)
    .singleton(),
})
