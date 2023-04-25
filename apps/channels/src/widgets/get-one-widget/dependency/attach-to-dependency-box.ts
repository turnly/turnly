/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneWidgetController } from '../api/get-one-widget.controller'
import { GetOneWidgetServer } from '../api/get-one-widget.server'

Box.register({
  getOneWidgetServer: ioc.asClass(GetOneWidgetServer).singleton(),
  getOneWidgetController: ioc.asClass(GetOneWidgetController).singleton(),
})
