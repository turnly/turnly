/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateCustomerController } from '../api/create-customer.controller'
import { CreateCustomerServer } from '../api/create-customer.server'
import { CreateCustomerCommandHandler } from '../commands/create-customer.command-handler'

Box.register({
  createCustomerServer: ioc.asClass(CreateCustomerServer).singleton(),
  createCustomerController: ioc.asClass(CreateCustomerController).singleton(),
  createCustomerCommandHandler: ioc
    .asClass(CreateCustomerCommandHandler)
    .singleton(),
})
