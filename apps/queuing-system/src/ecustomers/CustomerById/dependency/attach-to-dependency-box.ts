/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CustomerByIdController } from '../api/CustomerByIdController'
import { CustomerByIdServer } from '../api/CustomerByIdServer'
import { CustomerByIdQueryHandler } from '../queries/CustomerByIdQueryHandler'

Box.register({
  customerByIdServer: ioc.asClass(CustomerByIdServer).singleton(),
  customerByIdController: ioc.asClass(CustomerByIdController).singleton(),
  customerByIdQueryHandler: ioc.asClass(CustomerByIdQueryHandler).singleton(),
})
