import { MongoReadableRepo } from '@turnly/shared'
import { IServicesMapper } from 'Services/domain/contracts/IServicesMapper'
import { IServiceReadableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { ServiceDocument, ServiceModel } from '../models/ServiceModel'

export class ServiceReadableRepo
  extends MongoReadableRepo<Service, ServiceDocument>
  implements IServiceReadableRepo
{
  public constructor(servicesMapper: IServicesMapper<ServiceDocument>) {
    super(ServiceModel, servicesMapper)
  }
}
