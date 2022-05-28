import { IQuery } from '@turnly/shared'
import { GetIntegrationPayload } from 'Integrations/domain/payloads/GetIntegrationPayload'

export class IntegrationByIdQuery implements IQuery {
  public constructor(public readonly params: GetIntegrationPayload) {}
}
