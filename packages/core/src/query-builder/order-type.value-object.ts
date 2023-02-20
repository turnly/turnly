/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EnumValueObject } from '../value-objects/enum.value-object'
import { InvalidArgumentError } from '../value-objects/invalid-argument.error'

export enum OrderTypes {
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none',
}

export class OrderType extends EnumValueObject<OrderTypes> {
  public constructor(value: OrderTypes) {
    super(value, Object.values(OrderTypes))
  }

  public static fromValue(value: string): OrderType {
    const orderType = Object.values(OrderTypes).find(order => order === value)

    if (!orderType) {
      throw new InvalidArgumentError(`The order type ${value} is invalid`)
    }

    return new OrderType(orderType)
  }

  public isNone(): boolean {
    return this.value === OrderTypes.NONE
  }

  public isAsc(): boolean {
    return this.value === OrderTypes.ASC
  }

  protected throwErrorForInvalidValue(value: OrderTypes): void {
    throw new InvalidArgumentError(`The order type ${value} is invalid`)
  }
}
