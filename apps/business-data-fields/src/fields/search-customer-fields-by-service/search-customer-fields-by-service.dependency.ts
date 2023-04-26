/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SearchCustomerFieldsByServiceController } from './search-customer-fields-by-service.controller'
import { SearchCustomerFieldsByServiceQueryHandler } from './search-customer-fields-by-service.query-handler'
import { SearchCustomerFieldsByServiceServer } from './search-customer-fields-by-service.server'

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
