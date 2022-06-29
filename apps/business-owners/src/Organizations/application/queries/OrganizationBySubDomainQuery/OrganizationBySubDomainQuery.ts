import { IQuery } from '@turnly/shared'

export class OrganizationBySubdomainQuery implements IQuery {
  public constructor(public readonly subdomain: string) {}
}
