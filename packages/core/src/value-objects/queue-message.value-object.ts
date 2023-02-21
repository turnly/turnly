/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
type Value = string | number | Record<string, unknown | symbol>
type Attribute = Record<string, Value>

/**
 * Queue Message
 *
 * @author Turnly
 */
export class QueueMessage {
  private attributes: Attribute = {}

  public constructor(
    public readonly messageId?: string,
    public readonly queueUrl?: string
  ) {}

  public setAttribute<T extends Value>(name: string, value: T): void {
    this.attributes[name] = value
  }

  public getAttribute(name: string): Value {
    return this.attributes[name]
  }

  public *getAttributes() {
    const keys = Object.keys(this.attributes)

    for (const key of keys) {
      yield { [key]: this.attributes[key] }
    }
  }
}
