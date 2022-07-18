/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Answer } from '../entities/Answer'

export type IAnswersReadableRepo = IReadableRepository<Answer>
export type IAnswersWritableRepo = IWritableRepository<Answer>
