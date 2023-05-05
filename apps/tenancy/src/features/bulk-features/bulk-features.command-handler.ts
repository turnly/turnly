/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/core'
import { IFeaturesWritableRepo } from 'features/shared/domain/contracts/features-repo.interface'
import { Feature } from 'features/shared/domain/entities/feature.entity'
import { FeatureTypes } from 'features/shared/domain/enums/feature-types.enum'
import { FeatureUnits } from 'features/shared/domain/enums/feature-units.enum'

import { BulkFeaturesCommand } from './bulk-features.command'

@CommandHandler(BulkFeaturesCommand)
export class BulkFeaturesCommandHandler
  implements ICommandHandler<BulkFeaturesCommand, Feature[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly featuresWritableRepo: IFeaturesWritableRepo
  ) {}

  public async execute(command: BulkFeaturesCommand) {
    const features = command.features.map(feature =>
      Feature.create({
        type: FeatureTypes.UNLIMITED,
        unit: FeatureUnits.UNLIMITED,
        quantity: 0,
        ...feature,
      })
    )

    await this.featuresWritableRepo.save(features)

    for (const feature of features) {
      this.eventBus.publish(feature.pull())
    }

    return features
  }
}
