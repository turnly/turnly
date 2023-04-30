/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { AccessToken } from '../entity/access-token.entity'

export type IAccessTokensReadableRepo = IReadableRepository<AccessToken>
export type IAccessTokensWritableRepo = IWritableRepository<AccessToken>
