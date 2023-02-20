/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionHandler, Logger } from '@turnly/observability'

import { EventName, RealtimeMiddle, SubscribeObject } from './@types'
import { IRealtimeChannel } from './contracts/realtime-channel.interface'
import { IRealtimeClient } from './contracts/realtime-client.interface'
import { IRealtimeHandler } from './contracts/realtime-handler.interface'
import { IRealtimeManager } from './contracts/realtime-manager.interface'
import { Events } from './events'

/**
 * Channel
 *
 * @description A channel represents an isolated bridge under a name
 * that accepts its own connections and is completely separate from the others.
 *
 * @author Turnly
 */
export class Channel {
  /**
   * Internal channel (alias for namespace)
   *
   * @description An instance of the namespace reserved for this Channel.
   * @memberof Channel
   */
  protected readonly channel: IRealtimeChannel

  /**
   * Handlers
   *
   * @description Handlers of the messages that the clients of this channel emit.
   * @memberof Channel
   */
  protected handlers: Map<string | EventName, IRealtimeHandler[]> = new Map()

  /**
   * Connections
   *
   * @description Clients currently connected.
   * @memberof Channel
   */
  protected readonly connections: Map<string, IRealtimeClient> = new Map()

  /**
   * Create channel
   *
   * @memberof Channel
   */
  public constructor(
    /**
     * Name of channel
     *
     * @description Name reserved for this channel, must start with "/"
     * @example "/private"
     * @memberof Channel
     */
    protected readonly name: string,

    /**
     * Manager
     *
     * @description Realtime manager instance.
     * @memberof Channel
     */
    protected readonly manager: IRealtimeManager
  ) {
    this.channel = this.manager.of(this.name)

    this.setup()
  }

  /**
   * Sets up
   *
   * @description Sets up connections and handlers
   * @memberof Channel
   */
  private setup() {
    this.channel.on(Events.CONNECTION, client => {
      this.onConnect(client)
      this.onDisconnect(client)
    })

    this.channel.on(Events.CONNECT_ERROR, err => ExceptionHandler.handle(err))
  }

  public onBroadcast<E>(name: string, event: E) {
    const handlers = this.getHandlers(name)

    for (const handler of handlers) {
      handler.handle(event, this.channel)
    }

    return this
  }

  /**
   * On Connect
   *
   * @description Sets up on connect event and handlers
   * @memberof Channel
   */
  private onConnect(client: IRealtimeClient): void {
    Logger.info(`Client ${client.id} has been connected to ${this.name}`)

    this.connections.set(client.id, client)

    this.onSubscribe(client)
  }

  /**
   * On Disconnect
   *
   * @description Delete the current client connection.
   * @memberof Channel
   */
  protected onDisconnect(client: IRealtimeClient): void {
    client.on(Events.DISCONNECT, () => {
      Logger.info(`Client ${client.id} has been disconnected from ${this.name}`)

      this.connections.delete(client.id)
    })
  }

  /**
   * On Subscribe
   *
   * @description Subscribe the current client to a roomChannel.
   * @memberof Channel
   */
  protected onSubscribe(client: IRealtimeClient): void {
    client.on(Events.SUBSCRIBE, (data: SubscribeObject) => {
      client.join(data.roomChannel)
    })
  }

  /**
   * Subscribe
   *
   * @description Subscribe a message handler.
   * @memberof Channel
   */
  public subscribe(handlers: IRealtimeHandler[]) {
    for (const handler of handlers) {
      if (!handler.events.length) this.registerHandler('*', handler)

      for (const event of handler.events) {
        this.registerHandler(event, handler)
      }
    }

    return this
  }

  private registerHandler(
    eventId: string | EventName,
    handler: IRealtimeHandler
  ): void {
    const handlersForEvent = this.handlers.get(eventId)

    if (!handlersForEvent) {
      this.handlers.set(eventId, [handler])
    } else {
      handlersForEvent.push(handler)
    }
  }

  private getHandlers(eventId: string): IRealtimeHandler[] {
    const handlers = this.handlers.get(eventId)
    const subscribeToAll = this.handlers.get('*')

    return (subscribeToAll || []).concat(handlers || [])
  }

  /**
   * Use Middleware
   *
   * @description Aliases for middleware usage in channel.
   * @memberof Channel
   */
  public use(fn: RealtimeMiddle) {
    this.channel.use(fn)

    return this
  }

  /**
   * Connections
   *
   * @description Get the list of current connections.
   * @memberof Channel
   */
  public getConnections() {
    return this.connections.values()
  }

  public getName() {
    return this.name
  }
}
