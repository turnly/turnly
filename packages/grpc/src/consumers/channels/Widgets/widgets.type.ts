/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  GetWidgetRequest,
  GetWidgetResponse,
} from '../../../producers/channels'

export type IGetWidgetRequest = GetWidgetRequest.AsObject
export type IGetWidgetResponse = GetWidgetResponse.AsObject

export interface IWidgetsClient {
  getOne(request: IGetWidgetRequest): Promise<IGetWidgetResponse>
}
