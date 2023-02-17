/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { FindAnswersController } from '../api/FindAnswersController'
import { FindAnswersServer } from '../api/FindAnswersServer'
import { FindAnswersQueryHandler } from '../queries/FindAnswersQueryHandler'

Box.register({
  findAnswersServer: ioc.asClass(FindAnswersServer).singleton(),
  findAnswersController: ioc.asClass(FindAnswersController).singleton(),
  findAnswersQueryHandler: ioc.asClass(FindAnswersQueryHandler).singleton(),
})
