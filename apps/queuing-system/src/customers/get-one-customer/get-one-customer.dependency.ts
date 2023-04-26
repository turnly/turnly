/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneCustomerController } from './get-one-customer.controller'
import { GetOneCustomerQueryHandler } from './get-one-customer.query-handler'
import { GetOneCustomerServer } from './get-one-customer.server'

Box.register({
  getOneCustomerServer: ioc.asClass(GetOneCustomerServer).singleton(),
  getOneCustomerController: ioc.asClass(GetOneCustomerController).singleton(),
  getOneCustomerQueryHandler: ioc
    .asClass(GetOneCustomerQueryHandler)
    .singleton(),
})
