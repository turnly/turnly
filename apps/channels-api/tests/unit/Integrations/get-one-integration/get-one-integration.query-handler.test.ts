/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneIntegrationQueryHandler } from '../../../../src/Integrations/shared/application/queries'
import { IntegrationsReadableRepo } from '../shared/__mocks__/integrations-readable.repo'
import { IntegrationMother } from '../shared/domain/integration.entity.mother'
import { GetOneIntegrationQueryMother } from './get-one-integration.query.mother'

let repository: IntegrationsReadableRepo
let handler: GetOneIntegrationQueryHandler

describe('integrations > queries > validates the expected behavior of IntegrationByIdQuery', () => {
  beforeEach(() => {
    repository = new IntegrationsReadableRepo()
    handler = new GetOneIntegrationQueryHandler(repository)
  })

  it('should get an existing integration', async () => {
    const query = GetOneIntegrationQueryMother.random()
    const integration = IntegrationMother.fromExistingIntegrationOnQuery(query)

    repository.attachGetOneResponse(integration)

    const response = await handler.execute(query)

    expect(response).toEqual(integration)
    repository.assertGetOneHasBeenCalled()
  })
})
