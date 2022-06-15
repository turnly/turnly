import { Box, ioc } from '@turnly/shared'
import { CreateCustomerCommandHandler } from 'Customers/application/commands'
import { CustomerByIdQueryHandler } from 'Customers/application/queries'

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
