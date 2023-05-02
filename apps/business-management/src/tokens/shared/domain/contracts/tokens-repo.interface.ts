/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Token } from '../entity/token.entity'

export type ITokensReadableRepo = IReadableRepository<Token>
export type ITokensWritableRepo = IWritableRepository<Token>
