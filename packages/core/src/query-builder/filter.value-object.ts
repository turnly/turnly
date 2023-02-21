/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { FilterField } from './filter-field.value-object'
import { FilterOperator } from './filter-operator.value-object'

interface Params<V> {
  field: string
  operator: string
  value: V
  queryId: Guid
}

export class Filter<V> {
  private constructor(
    public readonly field: FilterField,
    public readonly operator: FilterOperator,
    public readonly value: V,
    public readonly queryId: Guid
  ) {}

  public static create<V>(params: Params<V>): Filter<V> {
    return new Filter<V>(
      new FilterField(params.field),
      FilterOperator.fromValue(params.operator),
      params.value,
      params.queryId
    )
  }
}
