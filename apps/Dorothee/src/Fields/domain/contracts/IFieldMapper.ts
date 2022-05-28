import { IEntityMapper } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'

export type IFieldMapper<Model> = IEntityMapper<Field, Model>
