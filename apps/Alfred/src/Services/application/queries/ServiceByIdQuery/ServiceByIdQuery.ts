import { IQuery } from '@turnly/shared'
import { GetServicePayload } from 'Services/domain/payloads/GetServicePayload'

export class ServiceByIdQuery implements IQuery {
  public constructor(public readonly params: GetServicePayload) {}
}
