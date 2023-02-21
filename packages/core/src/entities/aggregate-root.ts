/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { Event } from '../contracts/events/base.event'
import { Entity } from './base.entity'

/**
 * Aggregate roots
 *
 * @link https://martinfowler.com/bliki/DDD_Aggregate.html
 *
 * @extends {Entity<ID>}
 * @template ID
 *
 * @author Turnly
 */
export abstract class AggregateRoot<
  O = any,
  ID = Guid,
  E extends Event = Event
> extends Entity<ID> {
  private readonly events: E[] = []

  /**
   * Pull
   *
   * @description Pull domain events
   * @memberof AggregateRoot
   */
  public pull(): E[] {
    return this.events.splice(0)
  }

  /**
   * Register
   *
   * @description Register domain event
   * @memberof AggregateRoot
   */
  protected register<T extends E>(event: T): void {
    this.events.push(event)
  }

  public abstract toObject(): O
}
