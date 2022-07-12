/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IntegrationByIdQueryHandler } from '../../../../../../src/Integrations/application/queries/IntegrationByIdQuery'
import { IntegrationsReadableRepo } from '../../../__mocks__/IntegrationsReadableRepo'
import { IntegrationMother } from '../../../domain/IntegrationMother'
import { IntegrationByIdQueryMother } from './IntegrationByIdQueryMother'

let repository: IntegrationsReadableRepo
let handler: IntegrationByIdQueryHandler

describe('integrations > queries > validates the expected behavior of IntegrationByIdQuery', () => {
  beforeEach(() => {
    repository = new IntegrationsReadableRepo()
    handler = new IntegrationByIdQueryHandler(repository)
  })

  it('should get an existing integration', async () => {
    const query = IntegrationByIdQueryMother.random()
    const integration = IntegrationMother.fromExistingIntegrationOnQuery(query)

    repository.attachGetOneResponse(integration)

    const response = await handler.execute(query)

    expect(response).toEqual(integration)
    repository.assertGetOneHasBeenCalled()
  })
})
