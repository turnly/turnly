/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { SearchCustomerFieldsByServiceController } from '../api/SearchCustomerFieldsByServiceController'
import { SearchCustomerFieldsByServiceServer } from '../api/SearchCustomerFieldsByServiceServer'
import { SearchCustomerFieldsByServiceQueryHandler } from '../queries/SearchCustomerFieldsByServiceQueryHandler'

Box.register({
  searchCustomerFieldsByServiceServer: ioc
    .asClass(SearchCustomerFieldsByServiceServer)
    .singleton(),
  searchCustomerFieldsByServiceController: ioc
    .asClass(SearchCustomerFieldsByServiceController)
    .singleton(),
  searchCustomerFieldsByServiceQueryHandler: ioc
    .asClass(SearchCustomerFieldsByServiceQueryHandler)
    .singleton(),
})
