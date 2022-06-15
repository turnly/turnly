import { IQuery } from '@turnly/shared'
import { GetServiceByLocationPayload } from 'Services/domain/payloads/GetServiceByLocationPayload'

export class ServiceByLocationIdQuery implements IQuery {
  public constructor(public readonly params: GetServiceByLocationPayload) {}
}
