/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Event, IEventBus, IEventSubscriber } from '@turnly/shared'

export class TestEventBus implements IEventBus {
  private readonly publishMock = jest.fn()
  private readonly subMock = jest.fn()

  public async setup() {
    return Promise.resolve(this)
  }

  public subscribe(subscribers: IEventSubscriber[]): void {
    this.subMock(subscribers)
  }

  public async publish(events: Event[]): Promise<void> {
    this.publishMock(events)

    return Promise.resolve()
  }

  public assertNothingPublished() {
    expect(this.publishMock).not.toHaveBeenCalled()
  }

  public assertPublishCalled() {
    expect(this.publishMock).toHaveBeenCalled()
  }

  public assertPublishCalledWith(events: Event[]) {
    expect(this.publishMock).toHaveBeenCalledWith(events)
  }

  public assertSubCalledWith(subscribers: IEventSubscriber[]) {
    expect(this.subMock).toHaveBeenCalledWith(subscribers)
  }

  public assertLastPublishedEvent(expected: Event) {
    const { calls } = this.publishMock.mock

    expect(calls.length).toBeGreaterThan(0)

    const lastCall = calls[calls.length - 1]?.[0]
    const lastEvent = lastCall[0] as Event

    expect(lastEvent.id).toEqual(expected.id)
  }
}
