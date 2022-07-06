/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
export const serverOptions = Object.freeze({
  name: process.env.APP_NAME as string,
  port: parseInt(process.env.HTTP_PORT as string, 10),
  path: '/api/v1/rtm',
})

export enum Channels {
  QUEUING = '/queuing',
  HELPDESK = '/helpdesk',
  STREAM = '/stream',
}
