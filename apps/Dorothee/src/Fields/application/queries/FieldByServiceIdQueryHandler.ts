import { IQueryHandler, QueryHandler } from '@turnly/core'
import { Nullable } from '@turnly/shared'
import { IFieldReadableRepository } from 'Fields/domain/contracts/IFieldRepository'
import { Field } from 'Fields/domain/entities/Field'

import { FieldByServiceIdQuery } from './FieldByServiceIdQuery'

@QueryHandler(FieldByServiceIdQuery)
export class FieldByIdQueryHandler
  implements IQueryHandler<FieldByServiceIdQuery, Nullable<Field>>
{
  public constructor(
    private readonly fieldsReadableRepository: IFieldReadableRepository
  ) {}

  public async execute({ params }: FieldByServiceIdQuery) {
    const { id } = params

    return await this.fieldsReadableRepository.getById(id)
  }
}
