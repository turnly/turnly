import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryHandler } from '@turnly/shared'
import { IFieldReadableRepo } from 'Fields/domain/contracts/IFieldRepo'
import { Field } from 'Fields/domain/entities/Field'

import { FieldByServiceIdQuery } from './FieldByServiceIdQuery'

@QueryHandler(FieldByServiceIdQuery)
export class FieldByIdQueryHandler
  implements IQueryHandler<FieldByServiceIdQuery, Nullable<Field>>
{
  public constructor(private readonly fieldsReadableRepo: IFieldReadableRepo) {}

  public async execute({ params }: FieldByServiceIdQuery) {
    const { id } = params

    return await this.fieldsReadableRepo.getById(id)
  }
}
