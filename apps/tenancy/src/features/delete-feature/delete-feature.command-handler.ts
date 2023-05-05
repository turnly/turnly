/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, QueryBuilder } from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import {
  IFeaturesDestroyableRepo,
  IFeaturesReadableRepo,
} from 'features/shared/domain/contracts/features-repo.interface'
import { Feature } from 'features/shared/domain/entities/feature.entity'

import { DeleteFeatureCommand } from './delete-feature.command'

@CommandHandler(DeleteFeatureCommand)
export class DeleteFeatureCommandHandler
  implements ICommandHandler<DeleteFeatureCommand, Feature>
{
  public constructor(
    private readonly featuresDestroyableRepo: IFeaturesDestroyableRepo,
    private readonly featuresReadableRepo: IFeaturesReadableRepo
  ) {}

  public async execute({ key }: DeleteFeatureCommand) {
    const feature = await this.featuresReadableRepo.getOne(
      new QueryBuilder<Feature>().equal('key', key).getOne()
    )

    if (!feature) throw new ResourceNotFoundException()

    const { id } = feature.toObject()

    await this.featuresDestroyableRepo.destroy(id)

    return feature
  }
}
