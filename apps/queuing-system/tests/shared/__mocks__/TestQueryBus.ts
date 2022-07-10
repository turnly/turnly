/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IQuery, IQueryBus } from '@turnly/shared'

export class TestQueryBus implements IQueryBus {
  private readonly askMock = jest.fn()

  public async ask(query: IQuery) {
    return this.askMock(query)
  }

  public attachAskResponse<T>(response: T) {
    this.askMock.mockReturnValue(response)

    return this
  }

  public assertAskCalled() {
    expect(this.askMock).toHaveBeenCalled()
  }

  public assertAskCalledWith(query: IQuery) {
    expect(this.askMock).toHaveBeenCalledWith(query)
  }
}
