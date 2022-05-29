import { Nullable, ResourceNotFoundException } from '@turnly/common'
import { Controller, IQueryBus, TimeoutHandler } from '@turnly/shared'
import { FieldByServiceIdQuery } from 'Fields/application/queries'
import { Field } from 'Fields/domain/entities/Field'
import { GetFieldPayload } from 'Fields/domain/payloads/GetFieldPayload'

import { FieldDTO } from '../dtos/FieldDTO'

export class FieldsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  // @InputValidator(validator.get)
  public async get(params: GetFieldPayload) {
    const query = new FieldByServiceIdQuery(params)

    const field = await this.queryBus.ask<
      FieldByServiceIdQuery,
      Nullable<Field>
    >(query)

    if (!field) throw new ResourceNotFoundException()

    return this.respond.ok(FieldDTO.create(field.toObject()))
  }
}
