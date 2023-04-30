/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { AccessTokensMapper } from './infrastructure/mongo/access-tokens.mapper'
import { AccessTokensReadableRepo } from './infrastructure/mongo/access-tokens-readable.repo'
import { AccessTokensWritableRepo } from './infrastructure/mongo/access-tokens-writable.repo'

Box.register({
  accessTokensMapper: ioc.asClass(AccessTokensMapper).singleton(),
  accessTokensReadableRepo: ioc.asClass(AccessTokensReadableRepo).singleton(),
  accessTokensWritableRepo: ioc.asClass(AccessTokensWritableRepo).singleton(),
})
