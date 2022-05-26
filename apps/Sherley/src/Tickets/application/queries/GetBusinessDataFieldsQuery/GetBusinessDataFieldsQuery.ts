import { IQuery } from '@turnly/core'
import { Guid } from '@turnly/shared'

export class GetBusinessDataFieldsQuery implements IQuery {
  public constructor(public readonly serviceId: Guid) {}
}
