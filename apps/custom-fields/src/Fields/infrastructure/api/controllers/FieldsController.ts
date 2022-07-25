/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { SearchCustomerFieldsByServiceQuery } from 'Fields/application/queries/SearchCustomerFieldsByServiceQuery'
import { Field } from 'Fields/domain/entities/Field'

import { validator } from '../validators/FieldValidator'

export class FieldsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.findCustomerFieldsByService)
  public async findCustomerFieldsByService(
    params: SearchCustomerFieldsByServiceQuery
  ) {
    const query = new SearchCustomerFieldsByServiceQuery(
      params.serviceId,
      params.organizationId
    )

    const fields = await this.queryBus.ask<Nullable<Field[]>>(query)

    if (!fields?.length) throw new ResourceNotFoundException()

    return this.respond.ok(fields.map(field => field.toObject()))
  }
}
