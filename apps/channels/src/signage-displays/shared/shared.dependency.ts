/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SignageDisplaysMapper } from './infrastructure/mongo/signage-displays.mapper'
import { SignageDisplaysReadableRepo } from './infrastructure/mongo/signage-displays-readable.repo'
import { SignageDisplaysWritableRepo } from './infrastructure/mongo/signage-displays-writable.repo'

Box.register({
  signageDisplaysMapper: ioc.asClass(SignageDisplaysMapper).singleton(),
  signageDisplaysReadableRepo: ioc
    .asClass(SignageDisplaysReadableRepo)
    .singleton(),
  signageDisplaysWritableRepo: ioc
    .asClass(SignageDisplaysWritableRepo)
    .singleton(),
})
