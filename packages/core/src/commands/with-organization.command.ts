/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { IsNotEmpty } from 'class-validator'

import { Command } from './base.command'

/**
 * Organization command
 *
 * @description Extend this to create commands that apply to an organization (e.g. the organization that owns the resource)
 */
export abstract class OrganizationCommand extends Command {
  /**
   * Organization ID
   *
   * @type {Guid}
   * @description The ID of the organization to which the command applies.
   */
  @IsNotEmpty({
    message: 'Oops! The organization ID is required, but was not provided.',
  })
  public readonly organizationId: Guid
}
