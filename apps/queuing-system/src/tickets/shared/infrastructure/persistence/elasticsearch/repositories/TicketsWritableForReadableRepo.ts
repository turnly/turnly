/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  ElasticClient,
  ElasticIndexes,
  ElasticWritableRepo,
} from '@turnly/shared'
import { ITicketsWritableRepo } from 'tickets/shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

export class TicketsWritableForReadableRepo
  extends ElasticWritableRepo<Ticket>
  implements ITicketsWritableRepo
{
  public constructor(elasticClient: ElasticClient) {
    super(elasticClient, ElasticIndexes.TICKETS)
  }
}
