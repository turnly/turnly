import { config } from '@turnly/shared'

/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
export const serverOptions = Object.freeze({
  name: config.get('app.name'),
  port: config.get('server.port'),
  path: '/api/v1/rtm',
})

export enum Channels {
  QUEUING = '/queuing',
  HELPDESK = '/helpdesk',
  STREAM = '/stream',
}
