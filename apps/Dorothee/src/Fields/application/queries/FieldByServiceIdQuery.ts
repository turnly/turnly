import { IQuery } from '@turnly/core'
import { GetFieldPayload } from 'Fields/domain/payloads/GetFieldPayload'

export class FieldByServiceIdQuery implements IQuery {
  public constructor(public readonly params: GetFieldPayload) {}
}
