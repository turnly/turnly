/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { IServicesMapper } from 'services/shared/domain/contracts/services-mapper.interface'
import { IServicesWritableRepo } from 'services/shared/domain/contracts/services-repo.interface'
import { Service } from 'services/shared/domain/entities/service.entity'

import { IServiceDocument, ServiceModel } from '../models/service.model'

export class ServicesWritableRepo
  extends MongoWritableRepo<Service, IServiceDocument>
  implements IServicesWritableRepo
{
  public constructor(servicesMapper: IServicesMapper<IServiceDocument>) {
    super(ServiceModel, servicesMapper)
  }
}
