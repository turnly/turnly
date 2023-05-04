/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { ISignageDisplaysMapper } from 'signage-displays/shared/domain/contratcs/signage-displays-mapper.interface'
import { ISignageDisplaysWritableRepo } from 'signage-displays/shared/domain/contratcs/signage-displays-repo.interface'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import {
  ISignageDisplayDocument,
  SignageDisplayModel,
} from './signage-display.model'

export class SignageDisplaysWritableRepo
  extends MongoWritableRepo<SignageDisplay, ISignageDisplayDocument>
  implements ISignageDisplaysWritableRepo
{
  public constructor(
    signageDisplaysMapper: ISignageDisplaysMapper<ISignageDisplayDocument>
  ) {
    super(SignageDisplayModel, signageDisplaysMapper)
  }
}
