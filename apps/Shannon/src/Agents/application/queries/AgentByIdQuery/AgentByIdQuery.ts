import { IQuery } from '@turnly/shared'
import { GetAgentPayload } from 'Agents/domain/payloads/GetAgentPayload'

export class AgentByIdQuery implements IQuery {
  public constructor(public readonly params: GetAgentPayload) {}
}
