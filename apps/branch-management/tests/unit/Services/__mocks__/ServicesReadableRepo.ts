/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Service } from 'Services/Shared/domain/entities/Service'

export class ServicesReadableRepo
  extends TestReadableRepo<Service>
  implements IReadableRepository<Service> {}
