/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Integration } from '../entities/Integration'

export type IIntegrationsReadableRepo = IReadableRepository<Integration>
export type IIntegrationsWritableRepo = IWritableRepository<Integration>
