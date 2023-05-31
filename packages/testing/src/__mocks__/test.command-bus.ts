/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ICommand, ICommandBus, Transaction } from '@turnly/core'

export class TestCommandBus implements ICommandBus {
  private readonly executeMock = jest.fn()

  public transactional(_transaction?: Transaction): this {
    return this
  }

  public async execute(command: ICommand) {
    return this.executeMock(command)
  }

  public attachExecuteResponse<T>(response: T) {
    this.executeMock.mockReturnValue(response)

    return this
  }

  public assertExecuteCalled() {
    expect(this.executeMock).toHaveBeenCalled()
  }

  public assertExecuteCalledWith(command: ICommand) {
    expect(this.executeMock).toHaveBeenCalledWith(command)
  }
}
