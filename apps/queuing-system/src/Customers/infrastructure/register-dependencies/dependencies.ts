/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { CreateCustomerCommandHandler } from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQueryHandler } from 'Customers/application/queries/CustomerByIdQuery'

import { CustomersController } from '../api/controllers/CustomersController'
import { CustomerMapper } from '../persistence/mongo/entity-model-mappers/CustomerMapper'
import { CustomerReadableRepo } from '../persistence/mongo/repositories/CustomerReadableRepo'
import { CustomerWritableRepo } from '../persistence/mongo/repositories/CustomerWritableRepo'

Box.register({
  customersMapper: ioc.asClass(CustomerMapper).singleton(),
  customerReadableRepo: ioc.asClass(CustomerReadableRepo).singleton(),
  customerWritableRepo: ioc.asClass(CustomerWritableRepo).singleton(),
  customersController: ioc.asClass(CustomersController).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createCustomerCommandHandler: ioc
    .asClass(CreateCustomerCommandHandler)
    .singleton(),
})

/**
 * Query handlers
 */
Box.register({
  customerByIdQueryHandler: ioc.asClass(CustomerByIdQueryHandler).singleton(),
})
