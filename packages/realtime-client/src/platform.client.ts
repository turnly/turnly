/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Client } from './base.client'
import { Payload, PlatformRealtimePartialConn } from './types'

/**
 * Real Time Messaging Client (RTM API)
 *
 * @description Is a client that can connect to a realtime server.
 */
export class Platform extends Client {
  public constructor(connection: PlatformRealtimePartialConn) {
    super({
      ...connection,
      path: '/api/rtm/platform',
    })
  }

  public setAuthToken(token: string) {
    this.setHeaders('Authorization', `Bearer ${token}`)

    return this
  }

  public notify(event: string, payload: Payload) {
    this.connect()

    this.socket.emit(event, payload)

    return this
  }
}
