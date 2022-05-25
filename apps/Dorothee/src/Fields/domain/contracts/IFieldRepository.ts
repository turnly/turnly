import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Field } from '../entities/Field'

export type IFieldReadableRepository = IReadableRepository<Field>
export type IFieldWritableRepository = IWritableRepository<Field>
