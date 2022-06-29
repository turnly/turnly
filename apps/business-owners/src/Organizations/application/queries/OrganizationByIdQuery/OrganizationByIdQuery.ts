import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class OrganizationByIdQuery implements IQuery {
  public constructor(public readonly id: Guid) {}
}
