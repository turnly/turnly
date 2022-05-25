import { Controller, IQueryBus, TimeoutHandler } from '@turnly/core'
import { Nullable, ResourceNotFoundException } from '@turnly/shared'
import { FieldByServiceIdQuery } from 'Fields/application/queries'
import { CreateFieldUseCase } from 'Fields/application/use-cases/CreateFieldUseCase'
import { Field } from 'Fields/domain/entities/Field'
import { CreateFieldPayload } from 'Fields/domain/payloads/CreateFieldPayload'
import { GetFieldPayload } from 'Fields/domain/payloads/GetFieldPayload'

import { FieldDTO } from '../dtos/FieldDTO'
// import { validator } from '../validators/FieldsValidator'

export class FieldsController extends Controller {
  public constructor(
    private readonly createFieldUseCase: CreateFieldUseCase,
    private readonly queryBus: IQueryBus
  ) {
    super()
  }

  @TimeoutHandler()
  // @InputValidator(validator.create)
  public async create(params: CreateFieldPayload) {
    const field = await this.createFieldUseCase.present(params)

    return this.respond.created(FieldDTO.create(field.toObject()))
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
