/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneWidgetQueryHandler } from '../application/queries'
import { WidgetsMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/widgets.mapper'
import { WidgetsReadableRepo } from '../infrastructure/persistence/mongo/repositories/widgets-readable.repo'
import { WidgetsWritableRepo } from '../infrastructure/persistence/mongo/repositories/widgets-writable.repo'

Box.register({
  widgetsMapper: ioc.asClass(WidgetsMapper).singleton(),
  widgetsReadableRepo: ioc.asClass(WidgetsReadableRepo).singleton(),
  widgetsWritableRepo: ioc.asClass(WidgetsWritableRepo).singleton(),
  getOneWidgetQueryHandler: ioc.asClass(GetOneWidgetQueryHandler).singleton(),
})
