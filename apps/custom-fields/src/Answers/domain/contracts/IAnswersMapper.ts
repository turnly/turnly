/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export type IAnswersMapper<Model> = IEntityMapper<Answer, Model>
