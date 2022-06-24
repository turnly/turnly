import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class SearchCustomerFieldsByServiceQuery implements IQuery {
  public constructor(
    public readonly serviceId: Guid,
    public readonly companyId: Guid
  ) {}
}
