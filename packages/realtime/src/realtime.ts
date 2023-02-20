/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionHandler, Logger } from '@turnly/observability'
import { Server } from 'socket.io'

import { Channel } from './channel'
import type { IRealtimeManager } from './contracts/realtime-manager.interface'
import { DEFAULT_NAMESPACE } from './default-namespace.const'
import { Events } from './events'
import { NotAllowDefaultConnMiddle } from './not-allow-default-conn.middleware'

/**
 * Realtime
 *
 * @description It is the real-time event bridge that sends data between applications.
 *
 * @author Turnly
 */
export class Realtime {
  /**
   * Manager
   *
   * @description Bridge instance that handles all connections.
   * @memberof Realtime
   */
  private readonly manager: IRealtimeManager

  /**
   * Channels
   *
   * @description Currently created channels.
   * @memberof Realtime
   */
  protected readonly channels: Map<string, Channel> = new Map()

  /**
   * Create realtime
   *
   * @description Create the realtime instance, setup the manager and channels.
   * @memberof Realtime
   */
  public constructor(
    private readonly options: {
      /**
       * Name of the application that is running the realtime.
       *
       * @type {string}
       * @memberof RealtimeOptions
       *
       * @author Turnly
       */
      name: string

      /**
       * Port that the realtime will listen to.
       *
       * @type {number}
       * @memberof RealtimeOptions
       *
       * @author Turnly
       */
      port: number

      /**
       * Path that the realtime will listen to.
       *
       * @type {string}
       * @memberof RealtimeOptions
       *
       * @author Turnly
       */
      path?: string
    }
  ) {
    Logger.setNamespace(this.options.name)
    ExceptionHandler.setNamespace(this.options.name)

    this.manager = new Server(this.options.port, {
      path: this.options.path ?? DEFAULT_NAMESPACE,
      cors: { origin: '*' },
    })

    this.manager.use(new NotAllowDefaultConnMiddle().use())

    this.manager.on(Events.CONNECT_ERROR, err => ExceptionHandler.handle(err))

    Logger.info(
      `${this.options.name} server started, listening on port ${this.options.port}`
    )
  }

  public getChannels() {
    return this.channels.values()
  }

  /**
   * Listen
   *
   * @description Starts the channel listening.
   *
   * @author Turnly
   */
  public listen(name: string) {
    if (name === DEFAULT_NAMESPACE)
      throw new Error(`Channel ${name} is not allowed`)

    const formatted = name.startsWith(DEFAULT_NAMESPACE)
      ? name
      : `${DEFAULT_NAMESPACE}${name}`

    const channel = new Channel(formatted, this.manager)

    this.channels.set(formatted, channel)

    Logger.info(`Listening to "${formatted}" channel`)

    return channel
  }

  public getChannel(name: string) {
    return this.channels.get(name)
  }

  /**
   * Stop
   *
   * @description Closes server connection
   * @memberof Realtime
   */
  public stop() {
    this.manager.close()
  }
}
