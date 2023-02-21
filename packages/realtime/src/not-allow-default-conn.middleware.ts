/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BadRequestException,
  UnauthorizedException,
} from '@turnly/observability'

import type { RealtimeMiddle } from './@types'
import { RealtimeMessages } from './realtime-messages.enum'

/**
 * Not allow default connection
 *
 * @description Block connections by default and without a trusted origin.
 *
 * @author Turnly
 */
export class NotAllowDefaultConnMiddle {
  /**
   * Middle execute
   *
   * @memberof NotAllowDefaultConnMiddle
   */
  public use =
    (): RealtimeMiddle =>
    ({ handshake: { headers, ...handshake }, nsp }, next) => {
      try {
        const origin = headers.referer || handshake.url || headers.origin || ''

        if (!origin)
          throw new UnauthorizedException(RealtimeMessages.UNAUTHORIZED)

        if (nsp.name === '/')
          throw new BadRequestException(RealtimeMessages.NOT_ACCEPTED)

        next()
      } catch (error: any) {
        next(error)
      }
    }
}
