/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/core'
import { Field } from 'fields/shared/domain/entities/field.entity'

export type IFieldsMapper<Model> = IEntityMapper<Field, Model>
