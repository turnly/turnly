import { IQuery } from '@turnly/core'
import { Nullable } from '@turnly/shared'

import { Integration } from '../entities/Integration'
import { GetIntegrationPayload } from '../payloads/GetIntegrationPayload'

export interface IIntegrationQueryFactory {
  getById(): IQuery<GetIntegrationPayload, Nullable<Integration>>
}
