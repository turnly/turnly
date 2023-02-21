/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'
import { IsArray } from 'class-validator'

import { OrganizationCommand } from './with-organization.command'

/**
 * With extra command
 *
 * @description Extend this to create commands that have extra data
 */
export abstract class WithExtraCommand extends OrganizationCommand {
  @IsArray({
    message: 'Oops! The extra data is an array, but was not provided.',
  })
  public readonly extra: Extra[] = []
}
