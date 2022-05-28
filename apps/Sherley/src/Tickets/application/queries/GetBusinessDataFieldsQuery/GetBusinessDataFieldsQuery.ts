import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class GetBusinessDataFieldsQuery implements IQuery {
  public constructor(public readonly serviceId: Guid) {}
}
