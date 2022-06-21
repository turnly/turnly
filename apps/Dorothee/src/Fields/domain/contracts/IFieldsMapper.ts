import { IEntityMapper } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'

export type IFieldsMapper<Model> = IEntityMapper<Field, Model>
