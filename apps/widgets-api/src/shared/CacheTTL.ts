/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
/**
 * Specified in **seconds**, the time-to-live (TTL) value limits the lifespan
 * of the data being stored in the cache.
 */
export enum CacheTTL {
  /**
   * Default cache TTL
   *
   * @description Cache for 1 minute (60 seconds)
   */
  ONE_MINUTE = 60,

  /**
   * 3 minutes
   *
   * @description Cache for 3 minutes (180 seconds)
   */
  THREE_MINUTES = 180,

  /**
   * 5 minutes
   *
   * @description Cache for 5 minutes (300 seconds)
   */
  FIVE_MINUTES = 300,

  /**
   * 10 minutes
   *
   * @description Cache for 10 minutes (600 seconds)
   */
  TEN_MINUTES = 600,

  /**
   * 30 minutes
   *
   * @description Cache for 30 minutes (1800 seconds)
   */
  THIRTY_MINUTES = 1800,

  /**
   * 1 hour
   *
   * @description Cache for 1 hour (3600 seconds)
   */
  ONE_HOUR = 3600,

  /**
   * 24 hours
   *
   * @description Cache for 24 hours (86400 seconds)
   */
  ONE_DAY = 86400,
}
