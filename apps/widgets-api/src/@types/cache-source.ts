/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { KeyValueCacheSetOptions } from '@apollo/utils.keyvaluecache'

export interface CacheSourceParams extends KeyValueCacheSetOptions {
  /**
   * Ignore methods
   *
   * @description Class methods to ignore when caching
   */
  ignore?: string[]
}
