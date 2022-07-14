/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'

import { Field } from '../../../../src/Fields/domain/entities/Field'

export class FieldsReadableRepo
  extends TestReadableRepo<Field>
  implements IReadableRepository<Field> {}
