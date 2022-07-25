/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'

import { Field } from '../../../../src/Fields/domain/entities/Field'

export class FieldsReadableRepo
  extends TestReadableRepo<Field>
  implements IReadableRepository<Field> {}
