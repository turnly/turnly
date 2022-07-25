/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import type { Integration } from '@turnly/rpc/dist/producers/addons'
import type { Customer } from '@turnly/rpc/dist/producers/queuing-system'
import { Sources } from 'datasources'
import type { Request, Response } from 'express'

interface IRequest extends Request {
  customer: Customer.AsObject
  widget: Integration.AsObject
  organizationId: Guid
}

export interface IContext {
  req: IRequest
  res: Response
  dataSources: Sources
  setOrganizationId: (organizationId: Guid) => void
}
