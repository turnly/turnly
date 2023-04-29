/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { RealtimeMiddle } from '@turnly/realtime'

export class AuthGuard {
  public use = (): RealtimeMiddle => async (connection, next) => {
    next()
  }
}
