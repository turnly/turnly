/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ElasticIndexes, IndexConfig } from '@turnly/shared'

export const TicketsMappings: IndexConfig = {
  name: ElasticIndexes.TICKETS,
  configs: {},
}
