/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import Redis from 'redis'
import { promisify } from 'util'

import { IMemoryDatabase } from '../../contracts/persistence/memory-database.interface'

export type CacheOptions = Redis.RedisClientOptions

/**
 * Cache
 *
 * @description Cache is the contract-fulfilling implementation of an
 * in-memory database. Wrap the Redis instance in promises.
 *
 * @author Turnly
 */
export class Cache implements IMemoryDatabase {
  constructor(
    options: CacheOptions,

    /**
     * Client instance in memory
     *
     * @memberof Cache
     */
    private readonly client = Redis.createClient(options)
  ) {}

  /**
   * Set a key-value pair
   *
   * @memberof Cache
   */
  public set(key: string, value: string): void {
    this.client.set(key, value)
  }

  /**
   * Set a key-value pair with expiration
   *
   * @memberof Cache
   */
  public setex(key: string, value: string, expiresInSeconds: number): void {
    this.client.setEx(key, expiresInSeconds, value)
  }

  /**
   * Get a key-value pair
   *
   * @memberof Cache
   */
  public async get<T = string>(key: string): Promise<T> {
    const get = this.execute(this.client.get)

    return get(key)
  }

  /**
   * Completely remove data from memory
   *
   * @memberof Cache
   */
  public async flush(): Promise<void> {
    const flush = this.execute(this.client.FLUSHALL)

    await flush()
  }

  /**
   * Close the instance connection
   *
   * @memberof Cache
   */
  public async close(): Promise<void> {
    const quit = this.execute(this.client.quit)

    await quit()
  }

  /**
   * Delete a key-value pair
   *
   * @memberof Cache
   */
  public async forget(key: string): Promise<void> {
    const del = this.execute(this.client.del)

    await del(key)
  }

  /**
   * Wrap in a promise
   *
   * @param cb Client method
   * @memberof Cache
   */
  private execute(cb: Function): Function {
    return promisify(cb).bind(this.client)
  }

  public getClient() {
    return this.client
  }
}
