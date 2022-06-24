import { Producers } from '@turnly/rpc'

import { AgentsController } from '../controllers/AgentsController'
import { AgentsMapper } from './AgentsMapper'

export class AgentsServer extends Producers.ServerImplementation<Producers.Team.IAgentsServer> {
  public constructor(private readonly agentsController: AgentsController) {
    super()
  }

  @Producers.CallHandler(Producers.Team.GetAgentResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.Team.GetAgentRequest,
      Producers.Team.GetAgentResponse
    >,
    callback: Producers.ICallback<Producers.Team.GetAgentResponse>
  ) {
    const { data, meta } = await this.agentsController.getOne({
      id: call.request.getId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Team.GetAgentResponse()
    const agent = AgentsMapper.toRPC(data)

    response.setData(agent)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
    }
  }
}
