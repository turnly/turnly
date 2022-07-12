/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Integration } from 'Integrations/domain/entities/Integration'

export class IntegrationsReadableRepo
  extends TestReadableRepo<Integration>
  implements IReadableRepository<Integration> {}
