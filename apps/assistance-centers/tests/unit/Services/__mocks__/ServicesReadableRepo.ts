/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Service } from 'Services/domain/entities/Service'

export class ServicesReadableRepo
  extends TestReadableRepo<Service>
  implements IReadableRepository<Service> {}
