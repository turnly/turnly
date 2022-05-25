import { IEntityMapper } from '@turnly/core'
import { Field } from 'Fields/domain/entities/Field'

export type IFieldMapper<Model> = IEntityMapper<Field, Model>
