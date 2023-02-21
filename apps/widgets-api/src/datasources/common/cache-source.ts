/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable sonarjs/cognitive-complexity */
import 'reflect-metadata'

import { CacheSourceParams } from '@types'
import { CacheTTL } from 'shared/cache-ttl'

import { paramsToKey } from '../../shared/params-to-key'
import { DataSource } from './data-source'

const defaultOptions: CacheSourceParams = {
  /**
   * TTL in seconds
   *
   * @description Specified in **seconds**, the time-to-live (TTL) value
   * limits the lifespan of the data being stored in the cache.
   */
  ttl: CacheTTL.ONE_MINUTE,

  /**
   * Ignore methods
   *
   * @description Class methods to ignore when caching
   */
  ignore: [],
}

export const CacheSource = (
  options: CacheSourceParams = defaultOptions
): ClassDecorator => {
  return <T extends Function>(target: T) => {
    const descriptors = Object.getOwnPropertyDescriptors(target.prototype)

    for (const [name, descriptor] of Object.entries(descriptors)) {
      if (options.ignore && options.ignore.includes(name)) return

      if (typeof descriptor.value === 'function') {
        const method = descriptor.value as (
          ...args: unknown[]
        ) => Promise<unknown>

        descriptor.value = async function (...args) {
          if (!args?.length) return await method.apply(this, args)

          const key = paramsToKey(`${target?.name}.${name}`, args)

          const cached = await DataSource.getCache().get(key)

          if (cached) return JSON.parse(cached)

          const data = await method.apply(this, args)

          if (data) {
            await DataSource.getCache().set(key, JSON.stringify(data), options)
          }

          return data
        }

        if (method != descriptor.value) {
          for (const meta of Reflect.getMetadataKeys(method)) {
            const value = Reflect.getMetadata(meta, method)

            Reflect.defineMetadata(meta, value, descriptor.value)
          }
        }

        Object.defineProperty(target.prototype, name, descriptor)
      }
    }
  }
}
