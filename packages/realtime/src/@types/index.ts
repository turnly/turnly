/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Events } from '../events'

export * from './client-callback.type'
export * from './realtime-middleware.type'

/**
 * Event Name
 *
 * @description The name of the event that is emitted by the realtime.
 *
 * @author Turnly
 */
export type EventName = Events | string | symbol
