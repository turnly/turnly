/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Client } from './base.client'
import { RealtimePartialConn } from './base.type'

/**
 * Streaming API (STM API)
 *
 * @description Is a client that can connect to a streaming server.
 */
export class Stream extends Client {
  public constructor(connection: RealtimePartialConn) {
    super({
      ...connection,
      channel: 'stream',
      path: '/api/rtm/platform',
    })
  }

  public setAuthToken(token: string) {
    this.setHeaders('Authorization', `Bearer ${token}`)

    return this
  }
}
