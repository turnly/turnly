/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Field } from '../entities/field.entity'

export type IFieldsReadableRepo = IReadableRepository<Field>
export type IFieldsWritableRepo = IWritableRepository<Field>
