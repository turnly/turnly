import { IQuery } from '@turnly/core'
import { GetIntegrationPayload } from 'Integrations/domain/payloads/GetIntegrationPayload'

export class IntegrationByIdQuery implements IQuery {
  public constructor(public readonly params: GetIntegrationPayload) {}
}
