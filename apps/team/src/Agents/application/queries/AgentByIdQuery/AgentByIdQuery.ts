import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class AgentByIdQuery implements IQuery {
  public constructor(
    public readonly id: Guid,
    public readonly companyId: Guid
  ) {}
}
