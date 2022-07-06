/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'

export type IFieldsMapper<Model> = IEntityMapper<Field, Model>
