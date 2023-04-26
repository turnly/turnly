/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { WidgetMother } from './widget.entity.mother'

describe('widgets > domain > validates the min behavior in the life-cycle of a widget', () => {
  it('should return the required attributes after widget-instantiation', () => {
    const widget = WidgetMother.random()
    const expectedToHave = ['id', 'name', 'status', 'origins', 'organizationId']

    const attributes = widget.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  it('should register a creation event when the widget is created', () => {
    const widget = WidgetMother.random()
    const events = widget.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('widget.created')
    expect(event.payload).toBeDefined()
  })
})
