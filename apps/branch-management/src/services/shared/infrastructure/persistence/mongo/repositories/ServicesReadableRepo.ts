/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IServicesMapper } from 'services/Shared/domain/contracts/IServicesMapper'
import { IServicesReadableRepo } from 'services/Shared/domain/contracts/IServicesRepo'
import { Service } from 'services/Shared/domain/entities/Service'

import { IServiceDocument, ServiceModel } from '../models/ServiceModel'

export class ServicesReadableRepo
  extends MongoReadableRepo<Service, IServiceDocument>
  implements IServicesReadableRepo
{
  public constructor(servicesMapper: IServicesMapper<IServiceDocument>) {
    super(ServiceModel, servicesMapper)
  }
}
