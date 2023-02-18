/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneCustomerController } from '../api/get-one-customer.controller'
import { GetOneCustomerServer } from '../api/get-one-customer.server'
import { GetOneCustomerQueryHandler } from '../queries/get-one-customer.query-handler'

Box.register({
  getOneCustomerServer: ioc.asClass(GetOneCustomerServer).singleton(),
  getOneCustomerController: ioc.asClass(GetOneCustomerController).singleton(),
  getOneCustomerQueryHandler: ioc
    .asClass(GetOneCustomerQueryHandler)
    .singleton(),
})
