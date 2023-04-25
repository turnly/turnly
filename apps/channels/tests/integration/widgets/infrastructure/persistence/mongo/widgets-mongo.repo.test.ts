/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../../src/widgets/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { WidgetsModule } from '../../../../../../src/widgets/widgets.module'
import { WidgetMother } from '../../../../../unit/widgets/shared/domain/widget.entity.mother'
import { WidgetsQueryMother } from './widgets-query.mother'

const writableRepo = WidgetsModule.getWritableRepo()
const readableRepo = WidgetsModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('widgets > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random widget to mongo database', async () => {
    const widget = WidgetMother.random()

    await writableRepo.save(widget)
  })

  it('should persist multiple widgets using bulk insert to mongo database', async () => {
    const widgets = WidgetMother.collection()

    await writableRepo.save(widgets)
  })

  it('should retrieve an existing widget using getOne()', async () => {
    const widget = WidgetMother.random()

    await writableRepo.save(widget)

    const persisted = await readableRepo.getOne(
      WidgetsQueryMother.getOneWith(widget)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = widget.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple widgets using find()', async () => {
    const widgets = WidgetMother.collection()

    await writableRepo.save(widgets)

    const persisted = await readableRepo.find(
      WidgetsQueryMother.getManyIn(widgets)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(widgets.length)
  })

  it('should not retrieve a non-existing widget using getOne()', async () => {
    const widget = await readableRepo.getOne(
      WidgetsQueryMother.getOneWith(WidgetMother.random())
    )

    expect(widget).toBeNull()
  })
})
