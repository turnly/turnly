/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export interface IWritableRepository<Entity, Transaction = unknown> {
  save(
    entities: Entity | Entity[],
    transaction?: Transaction
  ): Promise<Entity | Entity[] | void>
}
