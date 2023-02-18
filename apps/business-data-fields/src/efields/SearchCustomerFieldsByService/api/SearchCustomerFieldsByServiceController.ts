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
import { Field } from 'efields/eshared/domain/entities/Field'
import { SearchCustomerFieldsByServiceQuery } from 'efields/SearchCustomerFieldsByService'

import { SearchCustomerFieldsByServiceValidator } from './SearchCustomerFieldsByServiceValidator'

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
