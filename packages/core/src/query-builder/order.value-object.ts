/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrderBy } from './order-by.value-object'
import { OrderType, OrderTypes } from './order-type.value-object'

export class Order {
  public constructor(
    public readonly orderBy: OrderBy,
    public readonly orderType: OrderType
  ) {}

  public static fromValues(orderBy?: string, orderType?: string): Order {
    if (!orderBy) {
      return Order.none()
    }

    return new Order(
      new OrderBy(orderBy),
      OrderType.fromValue(orderType || OrderTypes.ASC)
    )
  }

  public static none(): Order {
    return new Order(new OrderBy(''), new OrderType(OrderTypes.NONE))
  }

  public static desc(orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.DESC))
  }

  public static asc(orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.ASC))
  }

  public hasOrder() {
    return !this.orderType.isNone()
  }
}
