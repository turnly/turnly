/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateAnswersRequest,
  CreateAnswersResponse,
  ListAnswersByFieldRequest,
  ListAnswersByFieldResponse,
} from '../../../producers/business-data-fields/Answers'

export type ICreateAnswersRequest = CreateAnswersRequest.AsObject
export type ICreateAnswersResponse = CreateAnswersResponse.AsObject

export type IListAnswersByFieldRequest = ListAnswersByFieldRequest.AsObject
export type IListAnswersByFieldResponse = ListAnswersByFieldResponse.AsObject

export interface IAnswersClient {
  create(request: ICreateAnswersRequest): Promise<ICreateAnswersResponse>
  listByField(
    request: IListAnswersByFieldRequest
  ): Promise<IListAnswersByFieldResponse>
}
