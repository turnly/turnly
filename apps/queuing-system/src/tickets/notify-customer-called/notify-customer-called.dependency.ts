/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { NotifyCustomerCalledSubscriber } from './notify-customer-called.subscriber'

Box.register({
  notifyCustomerCalledSubscriber: ioc
    .asClass(NotifyCustomerCalledSubscriber)
    .singleton(),
})
