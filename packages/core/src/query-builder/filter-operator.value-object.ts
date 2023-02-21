/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EnumValueObject } from '../value-objects/enum.value-object'
import { InvalidArgumentError } from '../value-objects/invalid-argument.error'

export enum Operator {
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  MATCH = 'MATCH',
  MATCHES = 'MATCHES',
  NULL = 'NULL',
  NOT_NULL = 'NOT_NULL',
  GT = 'GREATER_THAN',
  LT = 'LOWER_THAN',
  IN = 'IN',
  NOT_IN = 'NOT_IN',
  GTE = 'GREATER_THAN_EQUAL',
  LTE = 'LOWER_THAN_EQUAL',
  EQUAL_IN_OBJECT_ARRAY = 'EQUAL_IN_OBJECT_ARRAY',
}

export class FilterOperator extends EnumValueObject<Operator> {
  public constructor(value: Operator) {
    super(value, Object.values(Operator))
  }

  public static fromValue(value: string): FilterOperator {
    const operator = Object.values(Operator).find(
      operator => operator === value
    )

    if (!operator) {
      throw new InvalidArgumentError(`The filter operator ${value} is invalid`)
    }

    return new FilterOperator(operator)
  }

  public isPositive(): boolean {
    return (
      this.value !== Operator.NOT_EQUAL &&
      this.value !== Operator.NOT_NULL &&
      this.value !== Operator.NOT_IN
    )
  }

  protected throwErrorForInvalidValue(value: Operator): void {
    throw new InvalidArgumentError(`The filter operator ${value} is invalid`)
  }

  public static equal() {
    return this.fromValue(Operator.EQUAL)
  }
}
