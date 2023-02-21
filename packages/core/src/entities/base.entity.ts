/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

/**
 * Base class for entities.
 *
 * @template ID
 * @author Turnly
 */
export abstract class Entity<ID = Guid> {
  /**
   * Creates an instance of Entity.
   * @param {ID} id
   * @memberof Entity
   */
  protected constructor(protected readonly id: ID) {}

  /**
   * Checks if two entities are the same.
   *
   * @param {Entity<ID>} entity
   * @return {*}  {boolean}
   * @memberof Entity
   */
  public equals(entity: Entity<ID>): boolean {
    return this.id === entity.id
  }
}
