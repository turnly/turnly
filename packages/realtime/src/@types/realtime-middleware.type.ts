/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { IRealtimeClient } from '../contracts/realtime-client.interface'

/**
 * Middleware
 *
 * @description Middleware declaration
 */
export type RealtimeMiddle = (
  client: IRealtimeClient,
  next: (err?: Error) => void
) => void
