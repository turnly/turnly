/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'

export type IFieldsMapper<Model> = IEntityMapper<Field, Model>
