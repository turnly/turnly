/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IServicesMapper } from 'services/shared/domain/contracts/services-mapper.interface'
import { IServicesReadableRepo } from 'services/shared/domain/contracts/services-repo.interface'
import { Service } from 'services/shared/domain/entities/service.entity'

import { IServiceDocument, ServiceModel } from '../models/service.model'

export class ServicesReadableRepo
  extends MongoReadableRepo<Service, IServiceDocument>
  implements IServicesReadableRepo
{
  public constructor(servicesMapper: IServicesMapper<IServiceDocument>) {
    super(ServiceModel, servicesMapper)
  }
}
