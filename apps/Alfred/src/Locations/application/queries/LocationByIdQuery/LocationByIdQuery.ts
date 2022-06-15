import { IQuery } from '@turnly/shared'
import { GetLocationPayload } from 'Locations/domain/payloads/GetLocationPayload'

export class LocationByIdQuery implements IQuery {
  public constructor(public readonly params: GetLocationPayload) {}
}
