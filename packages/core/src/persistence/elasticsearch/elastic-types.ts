/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export { Client as ElasticSearchClient } from '@elastic/elasticsearch'

/**
 * Elastic types
 *
 * @description Elastic supported types
 */
export type ElasticTypes =
  | 'null'
  | 'boolean'
  | 'byte'
  | 'short'
  | 'integer'
  | 'long'
  | 'unsigned_long'
  | 'double'
  | 'float'
  | 'text'
  | 'keyword'
  | 'binary'
  | 'date'
  | 'ip'
  | 'object'
  | 'nested'

export type IndexConfig = {
  name: string
  configs?: {
    mappings?: {
      properties: {
        [key: string]:
          | { type: ElasticTypes }
          | {
              properties: { [key: string]: { type: ElasticTypes } }
            }
      }
    }
    [key: string]: any
  }
}

export enum ElasticIndexes {
  TICKETS = 'tickets',
  LOCATIONS = 'locations',
  SERVICES = 'services',
  CUSTOMERS = 'customers',
  FIELDS = 'fields',
  ANSWERS = 'answers',
  INTERACTIONS = 'interactions',
}
