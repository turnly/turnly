/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IQuery } from '@turnly/shared'

export class OrganizationBySubdomainQuery implements IQuery {
  public constructor(public readonly subdomain: string) {}
}
