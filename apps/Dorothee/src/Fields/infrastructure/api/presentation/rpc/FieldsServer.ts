import { Producers } from '@turnly/rpc'

import { FieldsController } from '../../controllers/FieldsController'
import { FieldMapper } from './FieldsMapper'

export class FieldsServer extends Producers.ServerImplementation<Producers.Dorothee.IFieldsServer> {
  public constructor(private readonly fieldsController: FieldsController) {
    super()
  }

  @Producers.CallHandler(Producers.Dorothee.SearchFieldsResponse)
  public async search(
    call: Producers.ServerUnaryCall<
      Producers.Dorothee.SearchFieldsRequest,
      Producers.Dorothee.SearchFieldsResponse
    >,
    callback: Producers.ICallback<Producers.Dorothee.SearchFieldsResponse>
  ) {
    const { data, meta } = await this.fieldsController.get({
      id: call.request.getServiceId(),
    })

    const response = new Producers.Dorothee.SearchFieldsResponse()
    const field = FieldMapper.toRPC(data)

    response.addData(field)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      search: this.search.bind(this),
    }
  }
}
