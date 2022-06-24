import { NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'

import { FieldsController } from '../controllers/FieldsController'
import { FieldsMapper } from './FieldsMapper'

export class FieldsServer extends Producers.ServerImplementation<Producers.CustomFields.IFieldsServer> {
  public constructor(private readonly fieldsController: FieldsController) {
    super()
  }

  @Producers.CallHandler(
    Producers.CustomFields.FindCustomerFieldsByServiceResponse
  )
  public async findCustomerFieldsByService(
    call: Producers.ServerUnaryCall<
      Producers.CustomFields.FindCustomerFieldsByServiceRequest,
      Producers.CustomFields.FindCustomerFieldsByServiceResponse
    >,
    callback: Producers.ICallback<Producers.CustomFields.FindCustomerFieldsByServiceResponse>
  ) {
    const { data, meta } =
      await this.fieldsController.findCustomerFieldsByService({
        serviceId: call.request.getServiceId(),
        companyId: call.request.getCompanyId(),
      })

    const response =
      new Producers.CustomFields.FindCustomerFieldsByServiceResponse()

    if (data) response.setDataList(data.map(FieldsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      findCustomerFieldsByService: this.findCustomerFieldsByService.bind(this),
      runProcessors: () => {
        throw new NotImplementedError()
      },
    }
  }
}
