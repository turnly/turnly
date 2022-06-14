import { IQuery } from '@turnly/shared'
import { SearchCustomerFieldsByServicePayload } from 'Fields/domain/payloads/SearchCustomerFieldsByServicePayload'

export class SearchCustomerFieldsByServiceQuery implements IQuery {
  public constructor(
    public readonly params: SearchCustomerFieldsByServicePayload
  ) {}
}
