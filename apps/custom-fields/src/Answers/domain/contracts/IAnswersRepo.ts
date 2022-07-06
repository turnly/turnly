/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/shared'

import { Answer } from '../entities/Answer'

export type IAnswersWritableRepo = IWritableRepository<Answer>
