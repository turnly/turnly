import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Field } from '../entities/Field'

export type IFieldReadableRepo = IReadableRepository<Field>
export type IFieldWritableRepo = IWritableRepository<Field>
