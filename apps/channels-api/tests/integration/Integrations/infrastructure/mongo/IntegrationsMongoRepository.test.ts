/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../src/Integrations/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { IntegrationsFactory } from '../../../../../src/Integrations/infrastructure/factories/IntegrationsFactory'
import { IntegrationMother } from '../../../../unit/Integrations/shared/domain/integration.entity.mother'
import { IntegrationsQueryMother } from './IntegrationsQueryMother'

const writableRepo = IntegrationsFactory.getWritableRepo()
const readableRepo = IntegrationsFactory.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('integrations > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random integration to mongo database', async () => {
    const integration = IntegrationMother.random()

    await writableRepo.save(integration)
  })

  it('should persist multiple integrations using bulk insert to mongo database', async () => {
    const integrations = IntegrationMother.collection()

    await writableRepo.save(integrations)
  })

  it('should retrieve an existing integration using getOne()', async () => {
    const integration = IntegrationMother.random()

    await writableRepo.save(integration)

    const persisted = await readableRepo.getOne(
      IntegrationsQueryMother.getOneWith(integration)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = integration.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple integrations using find()', async () => {
    const integrations = IntegrationMother.collection()

    await writableRepo.save(integrations)

    const persisted = await readableRepo.find(
      IntegrationsQueryMother.getManyIn(integrations)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(integrations.length)
  })

  it('should not retrieve a non-existing integration using getOne()', async () => {
    const integration = await readableRepo.getOne(
      IntegrationsQueryMother.getOneWith(IntegrationMother.random())
    )

    expect(integration).toBeNull()
  })
})
