import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export type ServicesByLocationParams = {
  locationId: Guid
  companyId: Guid
}

export class ServicesByLocationQuery implements IQuery {
  public constructor(public readonly params: ServicesByLocationParams) {}
}
