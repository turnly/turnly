/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneWidgetController } from './get-one-widget.controller'
import { GetOneWidgetQueryHandler } from './get-one-widget.query-handler'
import { GetOneWidgetServer } from './get-one-widget.server'

Box.register({
  getOneWidgetQueryHandler: ioc.asClass(GetOneWidgetQueryHandler).singleton(),
  getOneWidgetServer: ioc.asClass(GetOneWidgetServer).singleton(),
  getOneWidgetController: ioc.asClass(GetOneWidgetController).singleton(),
})
