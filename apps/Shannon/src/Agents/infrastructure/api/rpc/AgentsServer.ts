import { Producers } from '@turnly/rpc'

import { AgentsController } from '../controllers/AgentsController'
import { AgentMapper } from './AgentsMapper'

export class AgentsServer extends Producers.ServerImplementation<Producers.Shannon.IAgentsServer> {
  public constructor(private readonly agentsController: AgentsController) {
    super()
  }

  @Producers.CallHandler(Producers.Shannon.GetAgentResponse)
  public async get(
    call: Producers.ServerUnaryCall<
      Producers.Shannon.GetAgentRequest,
      Producers.Shannon.GetAgentResponse
    >,
    callback: Producers.ICallback<Producers.Shannon.GetAgentResponse>
  ) {
    const { data, meta } = await this.agentsController.get({
      id: call.request.getId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Shannon.GetAgentResponse()
    const agent = AgentMapper.toRPC(data)

    response.setData(agent)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      get: this.get.bind(this),
    }
  }
}
