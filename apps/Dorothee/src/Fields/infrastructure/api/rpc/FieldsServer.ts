import { NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'

import { FieldsController } from '../controllers/FieldsController'
import { FieldMapper } from './FieldsMapper'

export class FieldsServer extends Producers.ServerImplementation<Producers.Dorothee.IFieldsServer> {
  public constructor(private readonly fieldsController: FieldsController) {
    super()
  }

  @Producers.CallHandler(
    Producers.Dorothee.SearchCustomerFieldsByServiceResponse
  )
  public async searchCustomerFieldsByService(
    call: Producers.ServerUnaryCall<
      Producers.Dorothee.SearchCustomerFieldsByServiceRequest,
      Producers.Dorothee.SearchCustomerFieldsByServiceResponse
    >,
    callback: Producers.ICallback<Producers.Dorothee.SearchCustomerFieldsByServiceResponse>
  ) {
    const { data, meta } =
      await this.fieldsController.searchCustomerFieldsByService({
        serviceId: call.request.getServiceId(),
        companyId: call.request.getCompanyId(),
      })

    const response =
      new Producers.Dorothee.SearchCustomerFieldsByServiceResponse()

    if (data) response.setDataList(data.map(field => FieldMapper.toRPC(field)))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      searchCustomerFieldsByService:
        this.searchCustomerFieldsByService.bind(this),
      runProcessors: () => {
        throw new NotImplementedError()
      },
    }
  }
}
