import { Producers } from '@turnly/rpc'

import { AnswersController } from '../controllers/AnswersController'
import { AnswerMapper } from './AnswersMapper'

export class AnswersServer extends Producers.ServerImplementation<Producers.Dorothee.IAnswersServer> {
  public constructor(private readonly answersController: AnswersController) {
    super()
  }

  @Producers.CallHandler(Producers.Dorothee.CreateAnswersResponse)
  public async create(
    call: Producers.ServerUnaryCall<
      Producers.Dorothee.CreateAnswersRequest,
      Producers.Dorothee.CreateAnswersResponse
    >,
    callback: Producers.ICallback<Producers.Dorothee.CreateAnswersResponse>
  ) {
    const answers = call.request.getAnswersList().map(answer => ({
      ...answer.toObject(),
      extra: answer.getExtrasList().map(e => e.toObject()),
    }))

    const { data, meta } = await this.answersController.create(answers)

    const response = new Producers.Dorothee.CreateAnswersResponse()

    if (data)
      response.setDataList(data.map(answer => AnswerMapper.toRPC(answer)))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      create: this.create.bind(this),
    }
  }
}
