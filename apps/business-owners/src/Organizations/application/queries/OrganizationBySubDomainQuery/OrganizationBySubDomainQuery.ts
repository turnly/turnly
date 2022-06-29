import { IQuery } from '@turnly/shared'

export class OrganizationBySubDomainQuery implements IQuery {
  public constructor(public readonly subdomain: string) {}
}
