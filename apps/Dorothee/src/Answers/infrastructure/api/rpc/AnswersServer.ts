import { Producers } from '@turnly/rpc'

import { AnswersController } from '../controllers/AnswersController'
import { AnswerMapper } from './AnswersMapper'

export class AnswersServer extends Producers.ServerImplementation<Producers.Dorothee.IAnswersServer> {
  public constructor(private readonly answersController: AnswersController) {
    super()
  }

  @Producers.CallHandler(Producers.Dorothee.CreateAnswerResponse)
  public async create(
    call: Producers.ServerUnaryCall<
      Producers.Dorothee.CreateAnswerRequest,
      Producers.Dorothee.CreateAnswerResponse
    >,
    callback: Producers.ICallback<Producers.Dorothee.CreateAnswerResponse>
  ) {
    const answers = call.request.getAnswersList().map(answer => ({
      ...answer.toObject(),
      extra: answer.getExtrasList().map(e => e.toObject()),
    }))

    const { data, meta } = await this.answersController.create(answers)

    const response = new Producers.Dorothee.CreateAnswerResponse()

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
