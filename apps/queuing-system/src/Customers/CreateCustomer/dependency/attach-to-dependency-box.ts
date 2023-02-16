/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateCustomerController } from '../api/CreateCustomerController'
import { CreateCustomerServer } from '../api/CreateCustomerServer'
import { CreateCustomerCommandHandler } from '../commands/CreateCustomerCommandHandler'

Box.register({
  createCustomerServer: ioc.asClass(CreateCustomerServer).singleton(),
  createCustomerController: ioc.asClass(CreateCustomerController).singleton(),
  createCustomerCommandHandler: ioc
    .asClass(CreateCustomerCommandHandler)
    .singleton(),
})
