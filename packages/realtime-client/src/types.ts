/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Callback Func
 *
 * @description Is a function that is called when the client receives a message from the server.
 *
 * @author Turnly
 */
export type ClientCallback<P extends Payload = Payload> = (
  payload: RealtimeEvent<P>
) => void

export type RealtimeConnection = {
  url: string
  path: string
  channel: string
}

export type RealtimePartialConn = Omit<
  RealtimeConnection,
  'channel' | 'headers' | 'path'
>

export type PlatformRealtimePartialConn = Omit<
  RealtimeConnection,
  'headers' | 'path'
>

export type Payload = Record<string, any>

export type Headers = Record<string, string>

export type EventType =
  | 'create'
  | 'update'
  | 'delete'
  | 'info'
  | 'error'
  | 'exception'
  | 'error'
  | 'unknown'

export type RealtimeEvent<P extends Payload> = {
  id: string
  name: string
  type: EventType
  timestamp: number
  payload: P
}
