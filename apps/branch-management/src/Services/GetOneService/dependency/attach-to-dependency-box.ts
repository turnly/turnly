/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneServiceController } from '../api/GetOneServiceController'
import { GetOneServiceServer } from '../api/GetOneServiceServer'
import { GetOneServiceQueryHandler } from '../queries/GetOneServiceQueryHandler'

Box.register({
  getOneServiceServer: ioc.asClass(GetOneServiceServer).singleton(),
  getOneServiceController: ioc.asClass(GetOneServiceController).singleton(),
  getOneServiceQueryHandler: ioc.asClass(GetOneServiceQueryHandler).singleton(),
})
