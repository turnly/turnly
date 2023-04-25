/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IQuery } from '@turnly/core'

export class GetOrganizationBySubdomainQuery implements IQuery {
  public constructor(public readonly subdomain: string) {}
}
