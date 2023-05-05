/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { Member } from '../entity/member.entity'

export type IMembersReadableRepo = IReadableRepository<Member>
export type IMembersWritableRepo = IWritableRepository<Member>
