/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Socket } from 'socket.io'

/**
 * Realtime Client
 *
 * @description Contract of a client when a connection is established
 *
 * @author Turnly
 */
export type IRealtimeClient = Socket
