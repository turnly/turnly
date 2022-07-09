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

export abstract class TestReadableRepo<Entity extends AggregateRoot>
  implements IReadableRepository<Entity>
{
  protected readonly getOneMock = jest.fn()
  protected readonly countMock = jest.fn()
  protected readonly findMock = jest.fn()

  public async getOne(query: QueryBuilderObject<Entity>) {
    return this.getOneMock(query)
  }

  public async find(query: QueryBuilderObject<Entity>) {
    return this.findMock(query)
  }

  public async count(query: QueryBuilderObject<Entity>) {
    return this.countMock(query)
  }

  public attachGetOneResponse(entity: Entity) {
    this.getOneMock.mockReturnValue(entity)

    return this
  }

  public attachFindResponse(entities: Entity | Entity[]) {
    this.findMock.mockReturnValue(entities)

    return this
  }

  public attachCountResponse(count: number) {
    this.countMock.mockReturnValue(count)

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
