/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IQuery, IQueryBus } from '@turnly/core'

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
