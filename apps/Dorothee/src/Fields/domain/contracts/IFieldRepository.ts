import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Field } from '../entities/Field'

export type IFieldReadableRepository = IReadableRepository<Field>
export type IFieldWritableRepository = IWritableRepository<Field>
