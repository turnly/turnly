/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EventName } from '../@types'
import { IRealtimeChannel } from './realtime-channel.interface'

/**
 * Realtime Handler
 *
 * @description Contract that handles a message from realtime clients
 *
 * @author Turnly
 */
export interface IRealtimeHandler<P = unknown, C = IRealtimeChannel> {
  /**
   * Name of the event message.
   *
   * @type {EventName}
   * @memberof IRealtimeHandler
   */
  events: EventName[]

  /**
   * Callback that handles the event.
   *
   * @memberof IRealtimeHandler
   */
  handle(event: P, channel: C): void
}
