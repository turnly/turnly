import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ILocationReadableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { LocationByIdQuery } from './LocationByIdQuery'

@QueryHandler(LocationByIdQuery)
export class LocationByIdQueryHandler
  implements IQueryHandler<LocationByIdQuery, Nullable<Location>>
{
  public constructor(
    private readonly locationsReadableRepo: ILocationReadableRepo
  ) {}

  public async execute({ params }: LocationByIdQuery) {
    const { id, companyId } = params

    const query = new QueryBuilder<Location>()
      .equal('id', id)
      .equal('companyId', companyId)
      .getOne()

    return await this.locationsReadableRepo.getOne(query)
  }
}
