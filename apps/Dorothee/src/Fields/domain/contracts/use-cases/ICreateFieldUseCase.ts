import { IUseCase } from '@turnly/core'
import { CreateFieldPayload } from 'Fields/domain/payloads/CreateFieldPayload'

import { Field } from '../../entities/Field'

export type ICreateFieldUseCase = IUseCase<CreateFieldPayload, Field>
