/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

const metadata = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

const feature = Validator.object({
  name: Validator.getBuilder().string().required(),
  quantity: Validator.getBuilder().number().optional(),
  unit: Validator.getBuilder().string().optional(),
  key: Validator.getBuilder().string().required(),
  type: Validator.getBuilder().string().optional(),
  metadata: Validator.getBuilder().array().items(metadata).optional(),
})
  .with('quantity', 'unit')
  .with('type', 'quantity')

export const BulkFeaturesValidator = Validator.object({
  features: Validator.getBuilder()
    .array()
    .items(feature)
    .unique((a, b) => a.key === b.key)
    .min(1)
    .required(),
})
