/* eslint-disable sonarjs/cognitive-complexity */
import 'reflect-metadata'

import crypto from 'crypto'

import { DataSource } from './DataSource'

const paramsToKey = (...params: unknown[]): string =>
  crypto.createHash('sha1').update(JSON.stringify(params)).digest('base64')

export const CacheSource = (ttl = 5): ClassDecorator => {
  return <T extends Function>(target: T) => {
    const descriptors = Object.getOwnPropertyDescriptors(target.prototype)

    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (typeof descriptor.value === 'function') {
        const method = descriptor.value as (
          ...args: unknown[]
        ) => Promise<unknown>

        descriptor.value = async function (...args) {
          if (!args.length) return await method.apply(this, args)

          const key = paramsToKey(args)

          const cached = await DataSource.getCache().get(key)

          if (cached) return JSON.parse(cached)

          const data = await method.apply(this, args)

          if (data) {
            await DataSource.getCache().set(key, JSON.stringify(data), { ttl })
          }

          return data
        }

        if (method != descriptor.value) {
          for (const key of Reflect.getMetadataKeys(method)) {
            const value = Reflect.getMetadata(key, method)

            Reflect.defineMetadata(key, value, descriptor.value)
          }
        }

        Object.defineProperty(target.prototype, key, descriptor)
      }
    }
  }
}
