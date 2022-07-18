/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Integration } from '../entities/Integration'

export type IIntegrationsReadableRepo = IReadableRepository<Integration>
export type IIntegrationsWritableRepo = IWritableRepository<Integration>
