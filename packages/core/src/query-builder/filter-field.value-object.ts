/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { StringValueObject } from '../value-objects/string.value-object'

export class FilterField extends StringValueObject {
  public constructor(value: string) {
    super(value)
  }
}
