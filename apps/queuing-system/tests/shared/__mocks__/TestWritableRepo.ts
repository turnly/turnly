/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { AggregateRoot, IWritableRepository } from '@turnly/shared'

export abstract class TestWritableRepo<Entity extends AggregateRoot>
  implements IWritableRepository<Entity>
{
  protected readonly saveMock = jest.fn()

  public async save(entities: Entity | Entity[]): Promise<void> {
    this.saveMock(entities)
  }

  public assertSaveHasBeenCalledWith(entities: Entity | Entity[]) {
    expect(this.saveMock).toHaveBeenCalledWith(entities)
  }
}
