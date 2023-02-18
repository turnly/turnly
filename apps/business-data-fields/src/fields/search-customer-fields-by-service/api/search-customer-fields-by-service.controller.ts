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
import { SearchCustomerFieldsByServiceQuery } from 'fields/search-customer-fields-by-service'
import { Field } from 'fields/shared/domain/entities/field.entity'

import { SearchCustomerFieldsByServiceValidator } from './search-customer-fields-by-service.validator'

export class SearchCustomerFieldsByServiceController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(SearchCustomerFieldsByServiceValidator)
  public async execute(params: SearchCustomerFieldsByServiceQuery) {
    const query = SearchCustomerFieldsByServiceQuery.build(params)

    const fields = await this.queryBus.ask<Nullable<Field[]>>(query)

    if (!fields?.length) throw new ResourceNotFoundException()

    return this.respond.ok(fields.map(field => field.toObject()))
  }
}
