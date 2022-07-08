/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import {
  AggregateRoot,
  IReadableRepository,
  QueryBuilderObject,
} from '@turnly/shared'

import { MotherObject } from '../MotherObject'

export abstract class TestReadableRepo<Entity extends AggregateRoot>
  implements IReadableRepository<Entity>
{
  protected readonly getOneMock = jest.fn()
  protected readonly countMock = jest.fn()
  protected readonly findMock = jest.fn()

  protected entities: Entity[] = []

  public async getOne(query: QueryBuilderObject<Entity>) {
    this.getOneMock(query)

    return this.entities?.[0] || null
  }

  public async find(query: QueryBuilderObject<Entity>) {
    this.findMock(query)

    return this.entities
  }

  public async count(query: QueryBuilderObject<Entity>) {
    this.countMock(query)

    return MotherObject.integer(3)
  }

  /**
   * Attach entities
   *
   * @description This method is used to attach entities to the repository.
   */
  public attach(entities: Entity[]) {
    this.entities = entities

    return this
  }

  public assertGetOneHasBeenCalledWith(query: QueryBuilderObject<Entity>) {
    expect(this.getOneMock).toHaveBeenCalledWith(query)
  }

  public assertFindHasBeenCalledWith(query: QueryBuilderObject<Entity>) {
    expect(this.findMock).toHaveBeenCalledWith(query)
  }

  public assertCountHasBeenCalledWith(query: QueryBuilderObject<Entity>) {
    expect(this.countMock).toHaveBeenCalledWith(query)
  }
}
