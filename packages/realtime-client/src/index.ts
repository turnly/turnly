/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Platform } from './platform.client'
import { Stream } from './stream.client'
import { Widgets } from './widgets.client'

export * from './types'

export const Realtime = {
  Platform,
  Widgets,
  Stream,
}
