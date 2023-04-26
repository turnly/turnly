/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { WithExtraCommand } from '@turnly/core'

export class CreateCustomersCommand extends WithExtraCommand {
  public readonly name?: string
  public readonly lastname?: Nullable<string>
  public readonly email?: Nullable<string>
  public readonly phone?: Nullable<string>
  public readonly country?: Nullable<string>
  public readonly hasWhatsapp?: boolean
  public readonly showNameSignage?: boolean
}
