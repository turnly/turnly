/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { Transaction } from '../../types/transaction.type'

export interface IDestroyableRepository {
  destroy(id: Guid, transaction?: Transaction): Promise<void>
}
