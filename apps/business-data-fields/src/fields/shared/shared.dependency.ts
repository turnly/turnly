/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { FieldsMapper } from './infrastructure/mongo/field.mapper'
import { FieldsReadableRepo } from './infrastructure/mongo/fields-readable.repo'
import { FieldsWritableRepo } from './infrastructure/mongo/fields-writable.repo'

Box.register({
  fieldsMapper: ioc.asClass(FieldsMapper).singleton(),
  fieldsReadableRepo: ioc.asClass(FieldsReadableRepo).singleton(),
  fieldsWritableRepo: ioc.asClass(FieldsWritableRepo).singleton(),
})
