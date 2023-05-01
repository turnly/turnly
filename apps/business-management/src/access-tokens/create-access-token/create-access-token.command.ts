/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Scopes } from '@turnly/auth'
import { OrganizationCommand } from '@turnly/core'

export class CreateAccessTokenCommand extends OrganizationCommand {
  public readonly name: string
  public readonly scopes: Scopes[]
}
