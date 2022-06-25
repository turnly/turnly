import crypto from 'crypto'

export const paramsToKey = (name: string, ...params: unknown[]): string =>
  crypto
    .createHash('sha1')
    .update(`${name}-${JSON.stringify(params)}`)
    .digest('base64')
