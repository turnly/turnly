/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export abstract class EnumValueObject<T> {
  public constructor(
    public readonly value: T,
    public readonly validValues: T[]
  ) {
    this.checkValueIsValid(value)
  }

  public checkValueIsValid(value: T): void {
    if (!this.validValues.includes(value)) {
      this.throwErrorForInvalidValue(value)
    }
  }

  protected abstract throwErrorForInvalidValue(value: T): void
}
