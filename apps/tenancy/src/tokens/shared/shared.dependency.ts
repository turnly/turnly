/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { TokensMapper } from './infrastructure/mongo/tokens.mapper'
import { TokensReadableRepo } from './infrastructure/mongo/tokens-readable.repo'
import { TokensWritableRepo } from './infrastructure/mongo/tokens-writable.repo'

Box.register({
  tokensMapper: ioc.asClass(TokensMapper).singleton(),
  tokensReadableRepo: ioc.asClass(TokensReadableRepo).singleton(),
  tokensWritableRepo: ioc.asClass(TokensWritableRepo).singleton(),
})
