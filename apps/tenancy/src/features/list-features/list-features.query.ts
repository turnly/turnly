/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Query } from '@turnly/core'

export class ListFeaturesQuery extends Query {
  public readonly limit?: number
  public readonly offset?: number
}
