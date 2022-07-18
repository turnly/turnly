/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IServicesMapper } from 'Services/domain/contracts/IServicesMapper'
import { IServicesWritableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { IServiceDocument, ServiceModel } from '../models/ServiceModel'

export class ServicesWritableRepo
  extends MongoWritableRepo<Service, IServiceDocument>
  implements IServicesWritableRepo
{
  public constructor(servicesMapper: IServicesMapper<IServiceDocument>) {
    super(ServiceModel, servicesMapper)
  }
}
