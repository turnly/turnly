import type { Integration } from '@turnly/rpc/dist/producers/Maverick'
import type { Customer } from '@turnly/rpc/dist/producers/Sherley'
import type { Request, Response } from 'express'

interface IRequest extends Request {
  customer: Customer.AsObject
  integration: Integration.AsObject
}

export interface IContext {
  req: IRequest
  res: Response
}
