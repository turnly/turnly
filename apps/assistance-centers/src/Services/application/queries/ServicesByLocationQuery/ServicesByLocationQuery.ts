import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class ServicesByLocationQuery implements IQuery {
  public constructor(
    public readonly locationId: Guid,
    public readonly organizationId: Guid
  ) {}
}
