/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { Guid } from '@turnly/common'
import { ClientSession, Document, Model } from 'mongoose'

import { IDestroyableRepository } from '../../contracts/repositories'

export abstract class MongoDestroyableRepo<D extends Document>
  implements IDestroyableRepository<ClientSession>
{
  protected constructor(protected readonly model: Model<D>) {}

  public async destroy(id: Guid, transaction?: ClientSession): Promise<void> {
    await this.model.deleteOne({ _id: id }, { session: transaction })
  }
}
