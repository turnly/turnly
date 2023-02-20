/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { io, Socket } from 'socket.io-client'

import type { ClientCallback, Payload, RealtimeConnection } from './types'

/**
 * Real Time Client
 *
 * @description Is a client that can connect to a realtime server.
 */
export abstract class Client {
  protected socket: Socket
  protected query = {}
  protected headers = {
    'X-Turnly-Realtime-Client': this.constructor.name,
  }

  public constructor(protected connection: RealtimeConnection) {}

  protected connect() {
    if (!this.socket) {
      if (this.isClientSide() && this.isStream()) {
        throw new Error(
          'Oops!, For security reasons, we can not connect to the Streaming API from the client-side.'
        )
      }

      this.socket = io(this.getEndpoint(), this.getOptions())
    }

    return this
  }

  private getOptions() {
    return {
      ...this.connection,
      extraHeaders: this.headers,
      query: this.query,
    }
  }

  private isStream() {
    return this.connection.channel === 'stream'
  }

  protected getEndpoint(): string {
    const channel = this.connection.channel.replace(/^\//, '').trim()

    return `${this.connection.url}/${channel}`
  }

  public setQuery(key: string, value: any) {
    this.query[key] = value

    return this
  }

  public setHeaders(key: string, value: string) {
    this.headers[key] = value

    return this
  }

  public isConnected(): boolean {
    return Boolean(this.socket?.connected)
  }

  public subscribe<P extends Payload = Payload>(
    callback: ClientCallback<P>
  ): Function
  public subscribe<P extends Payload = Payload>(
    event: string | string[],
    callback: ClientCallback<P>
  ): Function
  public subscribe<P extends Payload = Payload>(
    event: string | string[] | ClientCallback<P>,
    callback?: ClientCallback<P>
  ): Function {
    this.connect()

    if (typeof event === 'function') {
      this.socket.onAny(event)

      return () => this.unsubscribe(null, event)
    }

    const events = Array.isArray(event) ? event : [event]

    if (!callback) {
      throw new Error('Callback is required')
    }

    for (const e of events) {
      this.socket.on(e, callback)
    }

    return () => this.unsubscribe(events, callback)
  }

  public close() {
    if (this.socket) this.socket.close()

    return this
  }

  public reconnect() {
    if (this.socket) this.socket.connect()

    return this
  }

  public disconnect() {
    if (this.socket) this.socket.disconnect()

    return this
  }

  public onConnectError(cb: (error: Error) => void) {
    if (this.socket) this.socket.on('connect_error', cb)

    return this
  }

  protected unsubscribe<P extends Payload = Payload>(
    event: string[] | null,
    callback: ClientCallback<P>
  ) {
    if (!event) {
      this.socket.offAny(callback)

      return this
    }

    for (const e of event) {
      this.socket.off(e, callback)
    }

    return this
  }

  protected isServerSide() {
    return !this.isClientSide()
  }

  protected isClientSide() {
    return typeof window !== 'undefined'
  }
}
