/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import crypto from 'crypto'

export const paramsToKey = (name: string, ...params: unknown[]): string => {
  const hash = crypto
    .createHash('sha1')
    .update(`${name}-${JSON.stringify(params)}`)
    .digest('base64')

  return `query.${name}.${hash}`
}
