/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { FieldsMapper } from '../mongo/entity-model-mappers/FieldMapper'
import { FieldsReadableRepo } from '../mongo/repositories/FieldsReadableRepo'
import { FieldsWritableRepo } from '../mongo/repositories/FieldsWritableRepo'

Box.register({
  fieldsMapper: ioc.asClass(FieldsMapper).singleton(),
  fieldsReadableRepo: ioc.asClass(FieldsReadableRepo).singleton(),
  fieldsWritableRepo: ioc.asClass(FieldsWritableRepo).singleton(),
})
