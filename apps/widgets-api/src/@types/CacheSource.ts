import type { KeyValueCacheSetOptions } from '@apollo/utils.keyvaluecache'

export interface CacheSourceParams extends KeyValueCacheSetOptions {
  /**
   * Ignore methods
   *
   * @description Class methods to ignore when caching
   */
  ignore?: string[]
}
