/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Field } from '../entities/Field'

export type IFieldsReadableRepo = IReadableRepository<Field>
export type IFieldsWritableRepo = IWritableRepository<Field>
