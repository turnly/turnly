/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ElasticIndexes, IndexConfig } from '@turnly/core'

export const TicketsMappings: IndexConfig = {
  name: ElasticIndexes.TICKETS,
  configs: {},
}
