import { config } from '@turnly/shared'

/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export const serverOptions = Object.freeze({
  name: config.get('app.name'),
  port: config.get('server.port'),
  path: '/api/rtm/widgets',
})

export enum Channels {
  QUEUING = '/queuing',
}

/**
 * Turnly Edition
 *
 * @returns true if the app is running in Turnly CE
 */
export const isCommunityEdition = () => process.env.APP_EDITION === 'community'
