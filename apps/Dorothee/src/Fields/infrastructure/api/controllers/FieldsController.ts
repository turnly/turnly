import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { SearchCustomerFieldsByServiceQuery } from 'Fields/application/queries/FieldByServiceIdQuery'
import { Field } from 'Fields/domain/entities/Field'
import { SearchCustomerFieldsByServicePayload } from 'Fields/domain/payloads/SearchCustomerFieldsByServicePayload'

import { validator } from '../validators/FieldValidator'

export class FieldsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.searchCustomerFieldsByService)
  public async searchCustomerFieldsByService(
    params: SearchCustomerFieldsByServicePayload
  ) {
    const query = new SearchCustomerFieldsByServiceQuery(params)

    const fields = await this.queryBus.ask<
      SearchCustomerFieldsByServiceQuery,
      Nullable<Field[]>
    >(query)

    if (!fields?.length) throw new ResourceNotFoundException()

    return this.respond.ok(fields.map(field => field.toObject()))
  }
}
