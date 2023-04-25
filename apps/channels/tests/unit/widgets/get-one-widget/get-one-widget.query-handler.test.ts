/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneWidgetQueryHandler } from '../../../../src/widgets/shared/application/queries'
import { WidgetsReadableRepo } from '../shared/__mocks__/widgets-readable.repo'
import { WidgetMother } from '../shared/domain/widget.entity.mother'
import { GetOneWidgetQueryMother } from './get-one-widget.query.mother'

let repository: WidgetsReadableRepo
let handler: GetOneWidgetQueryHandler

describe('widgets > queries > validates the expected behavior of WidgetByIdQuery', () => {
  beforeEach(() => {
    repository = new WidgetsReadableRepo()
    handler = new GetOneWidgetQueryHandler(repository)
  })

  it('should get an existing widget', async () => {
    const query = GetOneWidgetQueryMother.random()
    const widget = WidgetMother.fromExistingWidgetOnQuery(query)

    repository.attachGetOneResponse(widget)

    const response = await handler.execute(query)

    expect(response).toEqual(widget)
    repository.assertGetOneHasBeenCalled()
  })
})
