/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Transaction } from '../../types/transaction.type'

export interface IWritableRepository<Entity> {
  save(
    entities: Entity | Entity[],
    transaction?: Transaction
  ): Promise<Entity | Entity[] | void>
}
