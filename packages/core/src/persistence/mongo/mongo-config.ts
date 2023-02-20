/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { DateTime } from '@turnly/datetime'

import { config } from '../../config'

export type MongoConfig = {
  url: string
}

export const mongoConfig: MongoConfig = Object.freeze({
  url: `${config.get('mongo.uri')}/${config.get('mongo.database')}`,
})

export const timestamps = { currentTime: () => DateTime.now().toJSDate() }
