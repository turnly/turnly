/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionHandler } from '@turnly/observability'

import { EventName } from '../@types'
import { IRealtimeChannel } from './realtime-channel.interface'
import { IRealtimeHandler } from './realtime-handler.interface'

/**
 * Realtime Handler
 *
 * @description The realtime handler is the main class that is used to communicate messages (events).
 *
 * @author Turnly
 */
export abstract class AbstractRealtimeHandler<P = unknown, C = IRealtimeChannel>
  implements IRealtimeHandler<P, C>
{
  public constructor(public readonly events: EventName[] = []) {}

  /**
   * Handle
   *
   * @description Fire when the client receives a message from the server.
   *
   * @param payload Data to be sent to the client
   * @param callback Function to be called when the client receives a message from the server
   * @param client Client that is connected to the server
   * @param namespace Instance of the current namespace
   *
   * @author Turnly
   */
  public abstract handle(event: P, channel: C): void

  /**
   * Handle error and throw exception if error occurs in the action.
   *
   * @param action Function to execute
   *
   * @author Turnly
   */
  protected async toResponse<R>(action: () => Promise<R>): Promise<R> {
    let response: R

    try {
      response = await action()
    } catch (err) {
      response = ExceptionHandler.handle(err).toResponse() as unknown as R
    }

    return response
  }
}
